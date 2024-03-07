import Alpine from 'alpinejs';
import { BaseController } from './controller';
import { urlIcon } from '../commons';
import { configurationService } from '../services';

class HomeController extends BaseController {

    onEnter(_$routeParams?: any): void {
        const pieceTheme = configurationService.configuration.pieceTheme;
        Alpine.data('info', () => ({
            iconWhite: urlIcon('wP.svg', pieceTheme),
            iconBlack: urlIcon('bP.svg', pieceTheme),
            init() {
                configurationService.configuration.configurationChangedEmitter.addEventListener((event) => {
                    if (event.field == 'pieceTheme') {
                        this.iconWhite = urlIcon('wP.svg', event.config.pieceTheme),
                        this.iconBlack = urlIcon('bP.svg', event.config.pieceTheme)
                    }
                });
            }
        }));
    }
}

export const homeController = new HomeController();
