'use strict';

/**
 * @ngdoc function
 * @name stockwatchApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the stockwatchApp
 */
angular.module('stockwatchApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
