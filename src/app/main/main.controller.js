'use strict';

angular.module('portfolio').controller('MainCtrl', function($scope, $filter) {

  $scope.works = [{
    title: 'eRevmax',
    link: 'http://www.erevmax.com/',
    image: 'assets/images/eRevMax1.jpg',
    priority: 15
  }, {
    title: 'GoSports Foundation',
    link: 'http://www.gosportsfoundation.in/',
    image: 'assets/images/port04.jpg',
    priority: 20
  }, {
    title: 'Floh Mobile',
    link: 'http://floh.in/',
    image: 'assets/images/port10.jpg',
    priority: 25
  }, {
    title: 'Nonapkin',
    link: 'https://itunes.apple.com/in/app/nonapkin-social-food-network/id699489033?mt=8',
    image: 'assets/images/port07.jpg',
    priority: 30
  }, {
    title: 'Nordlie',
    link: 'https://play.google.com/store/apps/details?id=dk.nordliefood.sales',
    image: 'assets/images/port01.jpg',
    priority: 35
  }, {
    title: 'CloudFuze',
    link: 'https://itunes.apple.com/us/app/cloudfuze/id694718661?mt=8',
    image: 'assets/images/port08.jpg',
    priority: 40
  }, {
    title: 'Ayyapathi',
    link: 'http://www.ayyapathi.com/temples',
    image: 'assets/images/port_ayya.png',
    priority: 5
  }, {
    title: 'Ayya 1008',
    link: 'https://play.google.com/store/apps/details?id=in.iamsugan.ayya1008',
    image: 'assets/images/port_ayya1008.png',
    priority: 10
  }];

  $scope.works = $filter('orderBy')($scope.works, 'priority');

  $scope.workRows = _.chunk($scope.works, 3);

});
