import Alpine from 'alpinejs';
import { BaseController } from './controller';
import { configurationService, routeService, soundService, stockfishService } from '../services';
import { MAIN_MENU_ID, ariaDescriptionFromIcon } from '../commons';
import { Chess, ChessInstance, PieceType, SQUARES, Square } from 'chess.js';
import { Chessground } from 'chessground';
import { Api } from 'chessground/api';
import { colors, MoveMetadata, Color, Key } from 'chessground/types';
import { Config } from 'chessground/config';
import { promotionController } from './promotion';
import { alertController, menuController } from '@ionic/core';

type Candidate = { type: string, score: number, pv: string };

class PositionController extends BaseController {

  private seo!: string;
  private chess: ChessInstance = Chess();
  private board!: Api;
  private boardConfig!: Config;
  private parsedPgn: { value: string[][] } = Alpine.reactive({ value: [] });
  private player!: "white" | "black";
  private engine!: "white" | "black";
  private listeningToStockfish = false;
  private stockfishDepth!: number;
  private stockfishMessageBuffer: Candidate[] = [];
  private selectCandidateFunction!: (candidates: Candidate[]) => Candidate | undefined;

  constructor() {
    super();
    stockfishService.messageEmitter.addEventListener((message: string) => this.stockfishMessage(message));
  }

  private async loadSelectionFunction() {
    if (!configurationService.configuration.selectionUrl) {
      this.selectCandidateFunction = this.selectEqualizingCandidate;
      return;
    }
    try {
      const response = await fetch(configurationService.configuration.selectionUrl);
      const content = await response.text();
      const { selectCandidate } = await import(/* @vite-ignore */`data:text/javascript;charset=utf-8,${encodeURIComponent(content)}`);
      this.selectCandidateFunction = selectCandidate;
    } catch (error) {
      console.log(error);
      alert('Error loading selection function. Using default algorithm');
      this.selectCandidateFunction = this.selectEqualizingCandidate;
    }
  }

  private resizeBoard() {
    const headers = Array.from(document.querySelectorAll('ion-header')) as HTMLElement[];
    const header = headers.find(header => header.clientHeight > 0);
    if (!header) return;
    const container = document.querySelector('.container') as HTMLElement;
    const boardWrapper = document.querySelector('.board_wrapper') as HTMLElement;
    const gauge = document.querySelector('.gauge') as HTMLElement;
    const infoWrapper = document.querySelector('.info_wrapper') as HTMLElement;
    const actionButtons = document.querySelector('.action_buttons') as HTMLElement;
    const containerWidth = container.clientWidth;
    const containerHeight = container.clientHeight - header.clientHeight;
    let minSize = Math.min(containerWidth, containerHeight);
    boardWrapper.style.height = `${minSize}px`;
    boardWrapper.style.width = `${minSize}px`;
    if (containerWidth > containerHeight) {
      infoWrapper.style.width = `${(containerWidth - minSize - 2)}px`;
      infoWrapper.style.height = '100%';
    } else {
      infoWrapper.style.width = '100%';
      infoWrapper.style.height = `${(containerHeight - minSize - 2)}px`;
    }
    actionButtons.style.width = infoWrapper.style.width;
    const board: any = document.getElementById('__chessboard__');
    const mod = boardWrapper.clientWidth % 8;
    let boardSize = boardWrapper.clientWidth - mod;
    if (boardWrapper.clientWidth - boardSize < 4) boardSize = boardSize - 8;
    board.style.height = `${boardSize}px`;
    board.style.width = `${boardSize}px`;
    gauge.style.height = `${boardSize}px`;
    gauge.style.width = `${boardWrapper.clientWidth - boardSize}px`;
  }

  private parsePgn(pgn: string) {
    this.parsedPgn.value = [];
    if (pgn == '')
      return;
    const parts = pgn.split('.');
    let pos = 0;
    parts.forEach(part => {
      if (pos > 0) {
        let moves = part.trim().split(' ', 2);
        this.parsedPgn.value.push(moves);
      }
      pos++;
    });
    console.log(JSON.stringify(this.parsedPgn.value));
  }

  private toDests(): Map<Key, Key[]> {
    const dests = new Map();
    SQUARES.forEach(s => {
      const ms = this.chess.moves({ square: s, verbose: true });
      if (ms.length) dests.set(s, ms.map(m => m.to));
    });
    return dests;
  }

  onEnter($routeParams?: any): void {
    const self = this;
    menuController.get(MAIN_MENU_ID).then(function (menu) {
      if (menu) menu.swipeGesture = false;
    });
    if (!this.selectCandidateFunction) this.loadSelectionFunction();
    const customFen = ($routeParams['fen1'] !== undefined);
    let fen: string;
    if (customFen) {
      fen = `${$routeParams['fen1']}/${$routeParams['fen2']}/${$routeParams['fen3']}/${$routeParams['fen4']}/${$routeParams['fen5']}/${$routeParams['fen6']}/${$routeParams['fen7']}/${$routeParams['fen8']}`;
    } else {
      fen = 'rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1';
    }
    this.seo = fen;

    this.chess.load(fen);
    this.parsePgn(this.chess.pgn());

    const turnWhite = this.chess.turn() == 'w';
    const turnColor: Color = (turnWhite ? 'white' : 'black');
    const move = (turnWhite ? 'white' : 'black');
    this.player = $routeParams['color'] || (this.chess.turn() == 'w' ? colors[0] : colors[1]);
    this.engine = this.player == 'white' ? 'black' : 'white';
    this.boardConfig = {
      fen: this.chess.fen(),
      orientation: this.player,
      viewOnly: false,
      turnColor: turnColor,
      premovable: {
        enabled: false
      },
      movable: {
        free: false,
        color: turnColor,
        dests: this.toDests(),
        showDests: configurationService.configuration.highlightSquares,
        events: {
          after: (orig: Key, dest: Key, _metadata: MoveMetadata) => { this.afterMove(orig, dest); }
        }
      },
      highlight: {
        lastMove: true,
        check: true
      },
      draggable: {
        enabled: true,
        autoDistance: true,
        showGhost: true
      },
      selectable: {
        enabled: true
      }
    };
    window.addEventListener('resize', function () {
      self.resizeBoard();
    });

    Alpine.data('info', () => ({
      boardTheme: configurationService.configuration.boardTheme,
      pieceTheme: configurationService.configuration.pieceTheme,
      customFen: customFen,
      fen: fen,
      parsedPgn: self.parsedPgn,
      move: move,
      ariaDescriptionFromIcon: ariaDescriptionFromIcon,
      chess: this.chess,
      init() {
        const gaugeTop = document.querySelector('.gauge_top') as HTMLElement;
        const gaugeBottom = document.querySelector('.gauge_bottom') as HTMLElement;
        gaugeTop.style.backgroundColor = (self.player == 'white' ? 'dimgray' : 'white');
        gaugeBottom.style.backgroundColor = (self.player == 'white' ? 'white' : 'dimgray');
        self.board = Chessground(document.getElementById('__chessboard__') as HTMLElement, self.boardConfig);
        // resize the board on the next tick, when the DOM of the chessboard has been loaded
        requestAnimationFrame(() => {
          self.resizeBoard();
        });
        configurationService.configuration.configurationChangedEmitter.addEventListener((event) => {
          switch (event.field) {
            case 'boardTheme': this.boardTheme = event.config.boardTheme; break;
            case 'pieceTheme': this.pieceTheme = event.config.pieceTheme; break;
            case 'highlightSquares': {
              if (self.boardConfig.movable) {
                self.board.set({
                  movable: { showDests: event.config.highlightSquares },
                });
              }
              break;
            }
            case 'stockfishMultiPV': self.updateStockfishMultiPV(); break;
            case 'selectionUrl': self.loadSelectionFunction(); break;
          }
        });
      }
    }));

    this.updateStockfishMultiPV();

    if (this.player == 'black') this.getStockfishMove();
  }

  private updateStockfishMultiPV() {
    stockfishService.postMessage(`setoption name MultiPV value ${configurationService.configuration.stockfishMultiPV}`);
  }

  private afterMove(orig: Key, dest: Key) {
    if (orig == 'a0' || dest == 'a0') return;
    // check promotion
    if (this.chess.get(orig)?.type == 'p' && (dest.charAt(1) == '8' || dest.charAt(1) == '1')) {
      routeService.openModal('promotion', 'promotion.html', promotionController, false, true, this.player[0]).then((data: any) => {
        this.registerMove(orig, dest, data.piece);
      });
    } else {
      this.registerMove(orig, dest, undefined);
    }
  }

  private registerMove(source: Square, target: Square, promotion: Exclude<PieceType, "p" | "k"> | undefined) {
    this.chess.move({
      from: source,
      to: target,
      promotion: promotion
    });
    if (promotion)
      this.board.set({ fen: this.chess.fen() });
    console.log(this.chess.fen());
    soundService.playAudio('move');
    this.parsePgn(this.chess.pgn());
    // this.fenHistory.push(this.chess.fen());
    // this.fenPointer++;
    // this.playerMoved.emit();
    // this.initializing = false;
    // this.prepareMove();
    if (!this.checkEnding()) {
      soundService.playAudio('move');
      //this.playerMoved.emit();
      this.getStockfishMove();
    }
  }

  private getStockfishMove() {
    // if (!this.stockfishWarningShowed) {
    //     const self = this;
    //     this.stockfishWarnTimeout = setTimeout(function() {
    //         self.stockfishWarningShowed = true;
    //         self.stockfishWarnTimeout = null;
    //         self.warn.emit(self.literales['chessboard.stockfish-slow']);
    //     }, 5000);
    // }
    this.stockfishDepth = configurationService.configuration.stockfishDepth;
    stockfishService.postMessage(`position fen ${this.chess.fen()}`);
    this.listeningToStockfish = true;
    this.stockfishMessageBuffer = [];
    stockfishService.postMessage(`go depth ${this.stockfishDepth}`);
  }

  private selectEqualizingCandidate(candidates: Candidate[]): Candidate | undefined {
    const positiveScores = candidates.filter(item => item.type == 'cp' && item.score >= 0);
    const negativeScores = candidates.filter(item => item.type == 'cp' && item.score < 0);
    if (positiveScores.length > 0) {
      const minPositiveScore = Math.min(...positiveScores.map(item => item.score));
      const minPositiveCandidates = positiveScores.filter(item => item.score === minPositiveScore);
      // Randomly pick one from the candidates
      const randomIndex = Math.floor(Math.random() * minPositiveCandidates.length);
      return minPositiveCandidates[randomIndex];
    } else if (negativeScores.length > 0) {
      // Find the negative score nearest to 0
      const maxNegativeScore = Math.max(...negativeScores.map(item => item.score));
      const maxNegativeCandidates = negativeScores.filter(item => item.score === maxNegativeScore);
      // Randomly pick one from the candidates
      const randomIndex = Math.floor(Math.random() * maxNegativeCandidates.length);
      return maxNegativeCandidates[randomIndex];
    } else {
      const mateObjects = candidates.filter(obj => obj.type === 'mate' && obj.score > 0);
      // If there are items with type=mate, return the one with the lowest score
      if (mateObjects.length > 0) {
        return mateObjects.reduce((minScoreObj, currentObj) => currentObj.score < minScoreObj.score ? currentObj : minScoreObj);
      } else {
        const mateObjects = candidates.filter(obj => obj.type === 'mate' && obj.score < 0);
        if (mateObjects.length > 0) {
          // If there are items with type=mate, return the one with the lowest score
          return mateObjects.reduce((minScoreObj, currentObj) =>
            currentObj.score < minScoreObj.score ? currentObj : minScoreObj
          );
        } else {
          return undefined;
        }
      }
    }
  }
/*
  private selectStrongestCandidate(candidates: Candidate[]): Candidate | undefined {
    const mateObjects = candidates.filter(obj => obj.type === 'mate' && obj.score > 0);
    if (mateObjects.length > 0) {
      // If there are items with type=mate, return the one with the lowest score
      return mateObjects.reduce((minScoreObj, currentObj) =>
        currentObj.score < minScoreObj.score ? currentObj : minScoreObj
      );
    } else {
      // If no items with type=mate, return the item of type=cp with the highest score
      const cpObjects = candidates.filter(obj => obj.type === 'cp');
      if (cpObjects.length > 0) {
        return cpObjects.reduce((maxScoreObj, currentObj) =>
          currentObj.score > maxScoreObj.score ? currentObj : maxScoreObj
        );
      } else {
        // Handle case where there are no items with type=cp
        const mateObjects = candidates.filter(obj => obj.type === 'mate' && obj.score < 0);
        if (mateObjects.length > 0) {
          // If there are items with type=mate, return the one with the lowest score
          return mateObjects.reduce((minScoreObj, currentObj) =>
            currentObj.score < minScoreObj.score ? currentObj : minScoreObj
          );
        } else {
          return undefined;
        }
      }
    }
  }
*/
  private stockfishMessage(message: string) {
    if (!this.listeningToStockfish) return;
    //console.log(`STOCKFISH: ${message}`);
    let match;
    if (match = message.match(/^bestmove ([a-h][1-8])([a-h][1-8])([qrbn])?/)) {
      this.listeningToStockfish = false;
      console.log(JSON.stringify(this.stockfishMessageBuffer));
      // Look for the lowest positive score or, if there aren't any, the closest to zero negative score
      let selected =
        this.selectCandidateFunction(this.stockfishMessageBuffer);
        //this.selectStrongestCandidate(this.stockfishMessageBuffer);
        //this.selectEqualizingCandidate(this.stockfishMessageBuffer);
      console.log(`selected: ${JSON.stringify(selected)}`);
      if (!selected || !this.stockfishMessageBuffer.includes(selected)) return;

      this.updateGauge(selected.score);
      // TO DO: promotion
      const from = selected.pv.substring(0, 2);
      const to = selected.pv.substring(2, 4);
      const promotion = (selected.pv.length == 5 && (selected.pv[4] == 'r' || selected.pv[4] == 'n' || selected.pv[4] == 'b' || selected.pv[4] == 'q') ? selected.pv[4] : undefined)
      this.board.move(from as Key, to as Key);
      this.chess.move({ from: from as Square, to: to as Square, promotion: promotion });
      const turn = this.chess.turn() === 'w' ? 'white' : 'black';
      // this.board.set({
      //   fen: this.chess.fen(),
      //   turnColor: turn,
      //   movable: {
      //     dests: this.toDests()
      //   }
      // });
      this.board.set({
        fen: this.chess.fen(),
        turnColor: turn,
        movable: {
          color: turn,
          dests: this.toDests()
        }
      });
      console.log(this.chess.fen());
      this.parsePgn(this.chess.pgn());
      if (this.checkEnding()) {
        this.board.set({ viewOnly: true });
      } else {
        soundService.playAudio('move');
      }
    } else if (match = message.match(/^info depth (\d+) .*score (\w+) (-?\d+) .*pv (\w+\d\w+)/)) {
      const depth = parseInt(match[1]);
      const scoreType = match[2];
      const scoreValue = parseInt(match[3]);
      const pv = match[4];
      if (scoreType == 'mate') {
        const turn = this.chess.turn() === 'w' ? 'white' : 'black';
        this.setFullGauge(turn);
      } else {
        this.updateGauge(scoreValue);
      }
      if (depth == this.stockfishDepth) {
        //console.log(`depth=${depth} score=${score} pv=${pv}`);
        const item = { type: scoreType, score: scoreValue, pv: pv };
        this.stockfishMessageBuffer.push(item);
        //console.log(`score: ${JSON.stringify(item)}`);
      }

      //let engineScore;
      // if (match[1] == 'cp') { /// Is it measuring in centipawns?
      //     engineScore = (score / 100.0).toFixed(2);
      //     self.stockfishMessageBuffer.push(message);
      // } else if (match[1] == 'mate') { /// Did it find a mate?

      // }
    }
  }

  private checkEnding(): boolean {
    const result = this.chess.game_over();
    if (result) {
      if (this.chess.in_checkmate() && !this.player.startsWith(this.chess.turn())) {
        soundService.playAudio('success');
      } else {
        soundService.playAudio('fail');
      }

      let message;
      if (this.chess.in_checkmate())
        message = 'position.checkmate';
      else if (this.chess.in_stalemate())
        message = 'position.stalemate';
      else if (this.chess.insufficient_material())
        message = 'position.insufficent-material';
      else if (this.chess.in_threefold_repetition())
        message = 'position.three-repetition';
      else if (this.chess.in_draw())
        message = 'position.rule-fifty';
      else
        message = 'position.game-over';

      alertController.create({
        header: window.AlpineI18n.t('position.game-over'),
        message: window.AlpineI18n.t(`${message}`),
        buttons: [
          {
            text: window.AlpineI18n.t('position.ok'),
            cssClass: 'overlay-button'
          }
        ]
      }).then(alert => alert.present());
    }
    return result;
  }

  private updateGauge(score: number) {
    const ev = this.povChances(this.engine, undefined, score);
    console.log(`povChances: ${ev}`);
    const gaugeTop = document.querySelector('.gauge_top') as HTMLElement;
    const gaugeBottom = document.querySelector('.gauge_bottom') as HTMLElement;
    const blackHeight = 100 - (ev + 1) * 50;
    const whiteHeight = 100 - blackHeight;
    gaugeTop.style.height = `${(this.player == 'white' ? blackHeight : whiteHeight)}%`;
    gaugeBottom.style.height = `${(this.player == 'white' ? whiteHeight : blackHeight)}%`;
  }

  private setFullGauge(color: Color) {
    const gaugeTop = document.querySelector('.gauge_top') as HTMLElement;
    const gaugeBottom = document.querySelector('.gauge_bottom') as HTMLElement;
    if (color == 'white') {
      const blackHeight = 0;
      const whiteHeight = 100;
      gaugeTop.style.height = `${(this.player == 'white' ? blackHeight : whiteHeight)}%`;
      gaugeBottom.style.height = `${(this.player == 'white' ? whiteHeight : blackHeight)}%`;
    } else {
      const blackHeight = 100;
      const whiteHeight = 0;
      gaugeTop.style.height = `${(this.player == 'white' ? blackHeight : whiteHeight)}%`;
      gaugeBottom.style.height = `${(this.player == 'white' ? whiteHeight : blackHeight)}%`;
    }
  }

  getSEOParams(): any {
    return { 'kind': this.seo };
  }

  onExit(): Promise<boolean> {
    return new Promise<boolean>(async resolve => {
      const alert = await alertController.create({
        header: window.AlpineI18n.t('position.confirm-exit.header'),
        message: window.AlpineI18n.t('position.confirm-exit.message'),
        buttons: [
          {
            text: window.AlpineI18n.t('position.confirm-exit.no'),
            role: 'cancel',
            cssClass: 'overlay-button',
            handler: () => {
              resolve(false);
            }
          }, {
            text: window.AlpineI18n.t('position.confirm-exit.yes'),
            cssClass: 'overlay-button',
            handler: () => {
              stockfishService.postMessage('stop');
              menuController.get(MAIN_MENU_ID).then(function (menu) {
                if (menu) menu.swipeGesture = true;
              });
              resolve(true);
            }
          }
        ]
      });
      alert.present();
    });
  }

  // https://github.com/lichess-org/lila/blob/master/ui/ceval/src/winningChances.ts
  private toPov(color: Color, diff: number): number {
    return (color === 'white' ? diff : -diff);
  }
  private rawWinningChances(cp: number): number {
    const MULTIPLIER = -0.00368208; // https://github.com/lichess-org/lila/pull/11148
    return 2 / (1 + Math.exp(MULTIPLIER * cp)) - 1;
  };
  private mateWinningChances(mate: number): number {
    const cp = (21 - Math.min(10, Math.abs(mate))) * 100;
    const signed = cp * (mate > 0 ? 1 : -1);
    return this.rawWinningChances(signed);
  };
  private cpWinningChances(cp: number): number {
    return this.rawWinningChances(Math.min(Math.max(-1000, cp), 1000));
  }
  private evalWinningChances(evMate?: number, evCp?: number): number {
    return typeof evMate !== 'undefined' ? this.mateWinningChances(evMate) : this.cpWinningChances(evCp!);
  }
  private povChances(color: Color, evMate?: number, evCp?: number): number {
    return this.toPov(color, this.evalWinningChances(evMate, evCp));
  }


}

export const positionController = new PositionController();
