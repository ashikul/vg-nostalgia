'use strict';
(function () {

  class VgMusicComponent {
    constructor() {
      this.message = 'Hello';
    }
  }

  angular.module('vgNostalgiaApp')
    .component('vgMusic', {
      templateUrl: 'app/vgMusic/vgMusic.html',
      controller: VgMusicComponent
    });

})();
