import Alpine from 'alpinejs';
import { BaseController } from './controller';
import { routeService } from '../services';
import { settingsController } from './settings';

class AppController extends BaseController {
    onEnter(_$routeParams?: any): void {
        Alpine.data('info',  () => ({
            showSettings() {
                routeService.openModal('settings', 'settings.html', settingsController, true, false);
            },
            init() {
            }
        }));
    }
}

export const appController = new AppController();
