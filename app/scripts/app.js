'use strict';

/**
 * @ngdoc overview
 * @name progressbarApp
 * @description
 * # progressbarApp
 *
 * Main module of the application.
 */
angular
  .module('progressbarApp', [
    'ngAnimate',
    'ngResource',
    'ui.bootstrap'
  ]);

angular.module('progressbarApp').constant('ENDPOINT', 'http://pb-api.herokuapp.com/bars');
