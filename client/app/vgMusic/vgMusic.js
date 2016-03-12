'use strict';

angular.module('vgNostalgiaApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('vgMusic', {
        url: '/vgMusic',
        template: '<vg-music></vg-music>'
      });
  });
