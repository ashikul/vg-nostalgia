'use strict';

angular.module('vgNostalgiaApp', [
        'vgNostalgiaApp.auth',
        'vgNostalgiaApp.admin',
        'vgNostalgiaApp.constants',
        'ngCookies',
        'ngResource',
        'ngSanitize',
        'btford.socket-io',
        'ui.router',
        'ui.bootstrap',
        'validation.match'
    ])
    .config(function ($urlRouterProvider, $locationProvider) {
        $urlRouterProvider
            .otherwise('/');

        $locationProvider.html5Mode(true);
    });
