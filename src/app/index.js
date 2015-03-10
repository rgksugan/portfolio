'use strict';

angular.module('portfolio', ['ngAnimate', 'ngTouch', 'ngRoute', 'mgcrea.ngStrap'])
  .config(function ($routeProvider) {
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
      .otherwise({
        redirectTo: '/'
      });
  })
;
