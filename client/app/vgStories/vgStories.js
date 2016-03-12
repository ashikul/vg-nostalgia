'use strict';

angular.module('vgNostalgiaApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('vgStories', {
        url: '/vgStories',
        templateUrl: 'app/vgStories/vgStories.html',
        controller: 'vgStoriesController',
        //controllerAs: 'vm'
      });
  });
