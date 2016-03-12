'use strict';

angular.module('vgNostalgiaApp')
  .controller('OauthButtonsCtrl', function ($window) {
    this.loginOauth = function (provider) {
      $window.location.href = '/auth/' + provider;
    };
  });
