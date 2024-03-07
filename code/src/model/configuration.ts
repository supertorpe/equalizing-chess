import { BOARD_THEMES, PIECE_THEMES, EventEmitter } from '../commons';

export type ConfigurationField =

    'stockfishDepth' | 'stockfishMultiPV' | 'preventScreenOff' | 'colorTheme' | 'playSounds' | 'fullScreen' | 'highlightSquares' | 'pieceTheme' | 'boardTheme' | 'selectionUrl';

export type ConfigurationChangedEvent = { config: Configuration, field: ConfigurationField };

export class Configuration {

    private _configurationChangedEmitter: EventEmitter<ConfigurationChangedEvent> = new EventEmitter<ConfigurationChangedEvent>();

    constructor(
        private _stockfishDepth: number,
        private _stockfishMultiPV: number,
        private _preventScreenOff: boolean,
        private _colorTheme: string,
        private _playSounds: boolean,
        private _fullScreen: boolean,
        private _highlightSquares: boolean,
        private _pieceTheme: string,
        private _boardTheme: string,
        private _selectionUrl: string
    ) { }

    public serialize() {
        return {
            stockfishDepth: this._stockfishDepth,
            stockfishMultiPV: this._stockfishMultiPV,
            preventScreenOff: this._preventScreenOff,
            colorTheme: this._colorTheme,
            playSounds: this._playSounds,
            fullScreen: this._fullScreen,
            highlightSquares: this._highlightSquares,
            pieceTheme: this._pieceTheme,
            boardTheme: this._boardTheme,
            selectionUrl: this._selectionUrl
        };
    }

    get configuration(): Configuration { return this; }
    get configurationChangedEmitter(): EventEmitter<ConfigurationChangedEvent> { return this._configurationChangedEmitter; }

    get stockfishDepth(): number { return this._stockfishDepth; }
    set stockfishDepth(value: number) { if (this._stockfishDepth != value) { this._stockfishDepth = value; this._configurationChangedEmitter.notify({ config: this, field: 'stockfishDepth' }); } }

    get stockfishMultiPV(): number { return this._stockfishMultiPV; }
    set stockfishMultiPV(value: number) { if (this._stockfishMultiPV != value) { this._stockfishMultiPV = value; this._configurationChangedEmitter.notify({ config: this, field: 'stockfishMultiPV' }); } }

    get preventScreenOff(): boolean { return this._preventScreenOff; }
    set preventScreenOff(value: boolean) { if (this._preventScreenOff != value) { this._preventScreenOff = value; this._configurationChangedEmitter.notify({ config: this, field: 'preventScreenOff' }); } }

    get colorTheme(): string { return this._colorTheme; }
    set colorTheme(value: string) { if (this._colorTheme != value) { this._colorTheme = value; this._configurationChangedEmitter.notify({ config: this, field: 'colorTheme' }); } }

    get playSounds(): boolean { return this._playSounds; }
    set playSounds(value: boolean) { if (this._playSounds != value) { this._playSounds = value; this._configurationChangedEmitter.notify({ config: this, field: 'playSounds' }); } }

    get fullScreen(): boolean { return this._fullScreen; }
    set fullScreen(value: boolean) { if (this._fullScreen != value) { this._fullScreen = value; this._configurationChangedEmitter.notify({ config: this, field: 'fullScreen' }); } }

    get highlightSquares(): boolean { return this._highlightSquares; }
    set highlightSquares(value: boolean) { if (this._highlightSquares != value) { this._highlightSquares = value; this._configurationChangedEmitter.notify({ config: this, field: 'highlightSquares' }); } }

    get pieceTheme(): string { return this._pieceTheme; }
    set pieceTheme(value: string) { if (this._pieceTheme != value) { this._pieceTheme = value; this._configurationChangedEmitter.notify({ config: this, field: 'pieceTheme' }); } }

    get boardTheme(): string { return this._boardTheme; }
    set boardTheme(value: string) { if (this._boardTheme != value) { this._boardTheme = value; this._configurationChangedEmitter.notify({ config: this, field: 'boardTheme' }); } }

    get selectionUrl(): string { return this._selectionUrl; }
    set selectionUrl(value: string) { if (this._selectionUrl != value) { this._selectionUrl = value; this._configurationChangedEmitter.notify({ config: this, field: 'selectionUrl' }); } }

}

export const DEFAULT_CONFIG = new Configuration(
    15,
    10,
    true,
    'dark',
    true,
    true,
    true,
    PIECE_THEMES[0],
    BOARD_THEMES[0].name,
    ''
);
