'use strict';

describe('Controller: KisallisCtrl', function () {

  // load the controller's module
  beforeEach(module('kisallisApp'));

  var KisallisCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    KisallisCtrl = $controller('KisallisCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
