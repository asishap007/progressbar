'use strict';

describe('Controller: MainCtrl', function () {

  // load the controller's module
  beforeEach(module('progressbarApp'));

  var $controller,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function (_$controller_, $rootScope) {
    scope = $rootScope.$new();
    $controller = _$controller_;
  }));

  it('limit should be 100', function () {
    var $scope = {}; // $controller takes an object containing a reference to the $scope
    var controller = $controller('MainCtrl', { $scope: $scope }); // the assertion checks the expected result
    //expect($scope.title).toEqual('Hello Pluralsight');
    expect($scope.limit).toEqual(100);
  });
});
