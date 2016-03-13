'use strict';
(function () {

  class VgMusicComponent {
    constructor($http, $scope, socket) {
      this.message = 'Hello';
      this.$http = $http;
      this.socket = socket;
      this.awesomeSongs = [];

      //$scope.$on('$destroy', function () {
      //  socket.unsyncUpdates('story');
      //});
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
