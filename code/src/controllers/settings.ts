import { PIECE_THEMES, BOARD_THEMES } from '../commons';
import { redrawIconImages, themeSwitcherService, configurationService, boardThemeSwitcherService } from '../services';
import { BaseController } from './controller';
import Alpine from 'alpinejs';
import { toastController } from '@ionic/core';
import { IonModal } from '@ionic/core/components/ion-modal';
import { IonToggle } from '@ionic/core/components/ion-toggle';
import { IonRange } from '@ionic/core/components/ion-range';

class SettingsController extends BaseController {
    onEnter(_$routeParams?: any): void {

        Alpine.data('settings', () => ({
            color: themeSwitcherService.currentTheme() == 'dark' ? 'w' : 'b',
            // theme
            showThemes: false,
            themes: themeSwitcherService.getThemes(),
            currentTheme() {
                return configurationService.configuration.colorTheme;
            },
            toggleThemes() {
                this.showThemes = !this.showThemes;
                this.showPieceThemes = false;
                this.showBoardThemes = false;
            },
            setTheme(theme: string) {
                themeSwitcherService.setTheme(theme);
                configurationService.configuration.colorTheme = theme;
                this.color = themeSwitcherService.currentTheme() == 'dark' ? 'w' : 'b';
            },
            // piece theme
            showPieceThemes: false,
            pieceThemes: PIECE_THEMES,
            currentPieceTheme: configurationService.configuration.pieceTheme,
            togglePieceThemes() {
                this.showPieceThemes = !this.showPieceThemes;
                this.showThemes = false;
                this.showBoardThemes = false;
            },
            setPieceTheme(pieceTheme: string) {
                this.currentPieceTheme = pieceTheme;
                configurationService.configuration.pieceTheme = pieceTheme;
            },
            // board theme
            showBoardThemes: false,
            boardThemes: BOARD_THEMES,
            currentBoardTheme: configurationService.configuration.boardTheme,
            toggleBoardThemes() {
                this.showBoardThemes = !this.showBoardThemes;
                this.showThemes = false;
                this.showPieceThemes = false;

            },
            setBoardTheme(boardTheme: string) {
                this.currentBoardTheme = boardTheme;
                configurationService.configuration.boardTheme = boardTheme;
                boardThemeSwitcherService.setTheme(boardTheme);
            },
            // play sounds
            playSounds: configurationService.configuration.playSounds,
            playSoundsChanged(checked: boolean) {
                this.playSounds = checked;
                configurationService.configuration.playSounds = checked;
            },
            // highlight squares
            highlightSquares: configurationService.configuration.highlightSquares,
            highlightSquaresChanged(checked: boolean) {
                this.highlightSquares = checked;
                configurationService.configuration.highlightSquares = checked;
            },
            // stockfish depth
            currentStockfishDepth: configurationService.configuration.stockfishDepth,
            changeStockfishDepth(value: number) {
                this.currentStockfishDepth = value;
                configurationService.configuration.stockfishDepth = value;  
            },
            // stockfish MultiPV
            currentStockfishMultiPV: configurationService.configuration.stockfishMultiPV,
            changeStockfishMultiPV(value: number) {
                this.currentStockfishMultiPV = value;
                configurationService.configuration.stockfishMultiPV = value;  
            },
            // selectionUrl
            currentSelectionUrl: configurationService.configuration.selectionUrl,
            changeSelectionUrl() {
                const value = (document.getElementById('inputSelectionUrl') as HTMLInputElement).value;
                this.currentSelectionUrl = value;
                configurationService.configuration.selectionUrl = value;
            },
            // save settings
            save() {
                configurationService.save().then(async () => {
                    const toast = await toastController.create({
                        message: window.AlpineI18n.t('settings.changes-saved'),
                        position: 'middle',
                        color: 'success',
                        duration: 1000
                    });
                    toast.present();
                    this.close();
                });
            },
            close() {
                (document.querySelector('ion-modal') as IonModal).dismiss();
            },
            init() {
                const toggleHighlightSquares = document.getElementById('toggleHighlightSquares') as IonToggle;
                toggleHighlightSquares.addEventListener('ionChange', () => { this.highlightSquaresChanged(toggleHighlightSquares.checked); });
                
                const togglePlaySounds = document.getElementById('togglePlaySounds') as IonToggle;
                togglePlaySounds.addEventListener('ionChange', () => { this.playSoundsChanged(togglePlaySounds.checked); });
                
                const stockfishDepthRange = document.getElementById('stockfishDepthRange') as IonRange;
                stockfishDepthRange.value = configurationService.configuration.stockfishDepth;
                stockfishDepthRange.addEventListener('ionChange', () => {
                    if (typeof stockfishDepthRange.value ===  'number') this.changeStockfishDepth(stockfishDepthRange.value);
                });

                const stockfishMultiPVRange = document.getElementById('stockfishMultiPVRange') as IonRange;
                stockfishMultiPVRange.value = configurationService.configuration.stockfishMultiPV;
                stockfishMultiPVRange.addEventListener('ionChange', () => {
                    if (typeof stockfishMultiPVRange.value ===  'number') this.changeStockfishMultiPV(stockfishMultiPVRange.value);
                });   

                ['showThemes', 'showPieceThemes', 'showBoardThemes'].forEach((item) => {
                    this.$watch(item, (_value) => {
                        redrawIconImages();
                    });
                });
                (document.getElementById('stockfishDepthRange') as IonRange).pinFormatter = value => value;
                (document.getElementById('stockfishMultiPVRange') as IonRange).pinFormatter = value => value;
            }
        }));
    }
}

export const settingsController = new SettingsController();
