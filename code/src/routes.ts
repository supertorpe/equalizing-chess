import { appController, homeController, aboutController, settingsController, positionController, promotionController } from './controllers';

export const ROUTE_MAP = {
    hash: true,
    mainRoute: {
        path: '/equalizing-chess/',
        template: 'app.html',
        tag: 'ion-app',
        controller: appController,
        hasParams: false
    },
    routes: [
        {
            path: '/',
            template: 'home.html',
            tag: 'ion-router-outlet',
            controller: homeController,
            hasParams: false
        },
        {
            path: '/home',
            template: 'home.html',
            tag: 'ion-router-outlet',
            controller: homeController,
            hasParams: false
        },
        {
            path: '/about',
            template: 'about.html',
            tag: 'ion-router-outlet',
            controller: aboutController,
            hasParams: false
        },
        {
            path: '/settings',
            template: 'settings.html',
            tag: 'ion-router-outlet',
            controller: settingsController,
            hasParams: false
        },
        {
            path: '/game/:color',
            template: 'position.html',
            tag: 'ion-router-outlet',
            controller: positionController,
            hasParams: true
        },
        {
            path: '/fen/:fen1/:fen2/:fen3/:fen4/:fen5/:fen6/:fen7/:fen8',
            template: 'position.html',
            tag: 'ion-router-outlet',
            controller: positionController,
            hasParams: true
        },
        {
            path: '/promotion',
            template: 'promotion.html',
            tag: 'ion-router-outlet',
            controller: promotionController,
            hasParams: false
        }
    ]
};
