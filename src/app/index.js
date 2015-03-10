'use strict';

angular.module('portfolio', ['ngAnimate', 'ngTouch', 'ngRoute', 'mgcrea.ngStrap', 'ui.bootstrap'])
  .config(function ($routeProvider, $compileProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'app/main/main.html'
      })
      .when('/about', {
        templateUrl: 'app/about/about.html'
      })
      .when('/work', {
        templateUrl: 'app/work/work.html'
      })
      .when('/contact', {
        templateUrl: 'app/contact/contact.html'
      })
      .when('/viz', {
        templateUrl: 'app/viz/viz.html'
      })
      .otherwise({
        redirectTo: '/'
      });
      $compileProvider.debugInfoEnabled(false);
  })
;
