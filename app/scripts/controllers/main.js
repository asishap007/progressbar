'use strict';

/**
 * @ngdoc function
 * @name progressbarApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the progressbarApp
 */
angular.module('progressbarApp')
  .controller('MainCtrl', function ($scope, progressBarService) {

    $scope.selectedProgressBar = {};
    $scope.progressBars = $scope.buttons = [];
    $scope.limit = 100;


    progressBarService.getProgressBarData().then(function (response) {
      progressBarService.setProgressBarData(response);
      $scope.progressBars = progressBarService.createProgressBars();
      $scope.selectedProgressBar = $scope.progressBars[0];
      $scope.buttons = progressBarService.getProgressBarButtons();
      $scope.limit = progressBarService.getProgressBarLimit();
    }, function (error) {
        console.log('Error in data fetching', error);
    });

    $scope.updateProgressBar = function (btnValue, selectedProgressBar) {
      console.log(btnValue);
      progressBarService.updateProgressBar(btnValue, selectedProgressBar);
    };


  });
