'use strict';

angular.module('portfolio', ['ngAnimate', 'ngTouch', 'ngRoute', 'mgcrea.ngStrap', 'ui.bootstrap'])
  .config(function($routeProvider, $compileProvider) {
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
      .when('/lab', {
        templateUrl: 'app/lab/lab.html'
      })
      .when('/lab/visualiations/tamil-nadu-literacy-rates', {
        templateUrl: 'app/viz/tn-literacy-rates.html'
      })
      .when('/lab/visualiations/connected-books', {
        templateUrl: 'app/viz/connected-books.html'
      })
      .when('/lab/visualiations/farm', {
        templateUrl: 'app/viz/farm.html'
      })
      .when('/readings', {
        templateUrl: 'app/readings/readings.html'
      })
      .when('/404', {
        templateUrl: '404.html'
      })
      .otherwise({
        redirectTo: '/404'
      });
    $compileProvider.debugInfoEnabled(false);
  });
