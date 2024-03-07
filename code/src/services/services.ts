import './ionic';
import { storageService } from './storage-service';
import { configurationService } from './configuration-service';
import { alpineService } from './alpine-service';
import { themeSwitcherService } from './theme-switcher-service';
import { boardThemeSwitcherService } from './board-theme-switcher-service';
import { stockfishService } from './stockfish-service';
import { soundService } from './sound-service';

export function services_initialize() {
    return storageService.init()
        .then(() => configurationService.init())
        .then(() => stockfishService.init())
        .then(() => soundService.init())
        .then(() => themeSwitcherService.init())
        .then(() => boardThemeSwitcherService.init())
        .then(() => alpineService.init())
        ;

}
