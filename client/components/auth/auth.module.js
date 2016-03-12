'use strict';

angular.module('vgNostalgiaApp.auth', [
    'vgNostalgiaApp.constants',
    'vgNostalgiaApp.util',
    'ngCookies',
    'ui.router'
  ])
  .config(function ($httpProvider) {
    $httpProvider.interceptors.push('authInterceptor');
  });
