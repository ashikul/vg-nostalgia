(function (angular, undefined) {
  'use strict';

  angular.module('vgNostalgiaApp.constants', [])

    .constant('appConfig', {userRoles: ['guest', 'user', 'admin']})

  ;
})(angular);