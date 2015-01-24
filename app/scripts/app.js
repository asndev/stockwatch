'use strict';

/**
 * @ngdoc overview
 * @name stockwatchApp
 * @description
 * # stockwatchApp
 *
 * Main module of the application.
 */
angular
  .module('stockwatchApp', [
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
