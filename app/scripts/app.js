'use strict';

angular.module('kisallisApp', ['ngResource', 'ui.bootstrap'])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/kisallis', {
        templateUrl: 'views/kisallis.html',
        controller: 'KisallisCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
