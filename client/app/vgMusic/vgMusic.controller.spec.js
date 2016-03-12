'use strict';

describe('Component: VgMusicComponent', function () {

  // load the controller's module
  beforeEach(module('vgNostalgiaApp'));

  var VgMusicComponent, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($componentController, $rootScope) {
    scope = $rootScope.$new();
    VgMusicComponent = $componentController('VgMusicComponent', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
