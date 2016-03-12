'use strict';


class vgStoriesController {

  constructor($http, $scope, socket) {
    this.$http = $http;
    //this.socket = socket;
    this.awesomeStories = [];

    //$scope.$on('$destroy', function () {
    //  socket.unsyncUpdates('story');
    //});
  }

  $onInit() {
    this.$http.get('/api/stories').then(response => {
      this.awesomeStories = response.data;
      //this.socket.syncUpdates('story', this.awesomeStories);
    })
  }

  addStory() {
    if (this.newStory) {
      this.$http.post('/api/stories', {name: this.newStory});
      this.newStory = '';
    }
  }

  deleteStory(story) {
    this.$http.delete('/api/stories/' + story._id);
  }
}

//angular.module('vgNostalgiaApp')
//  .component('', {
//    templateUrl: 'app/main/main.html',
//    controller: MainController
//  });

angular.module('vgNostalgiaApp')
  .controller('vgStoriesController', vgStoriesController);