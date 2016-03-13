'use strict';

angular.module('vgNostalgiaApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('vgStories', {
        url: '/vgStories',
        template: '<vg-stories></vg-stories>'
      });
  });
