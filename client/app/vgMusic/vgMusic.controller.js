'use strict';
(function () {

  class VgMusicComponent {
    constructor($http) {
      this.message = 'Hello';
      this.$http = $http;
    }

    $onInit() {
      this.$http.get('/api/songs').then(response => {
        this.awesomeSongs = response.data;
        this.socket.syncUpdates('song', this.awesomeSongs);
      })
    }




  }


  angular.module('vgNostalgiaApp')
    .component('vgMusic', {
      templateUrl: 'app/vgMusic/vgMusic.html',
      controller: VgMusicComponent
    });

})();
