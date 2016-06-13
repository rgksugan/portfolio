'use strict';

angular.module('portfolio').controller('MainCtrl', function ($scope, $filter) {

    $scope.works = [{
      title: 'eRevmax',
      link: 'http://www.erevmax.com/',
      image: 'assets/images/eRevMax1.jpg',
      priority: 1
    }, {
      title: 'GoSports Foundation',
      link: 'http://www.gosportsfoundation.in/',
      image: 'assets/images/port04.jpg',
      priority: 2
    }, {
      title: 'Floh Mobile',
      link: 'http://floh.in/',
      image: 'assets/images/port10.jpg',
      priority: 3
    }, {
      title: 'Department of CSE, Karunya University',
      link: 'http://www.karunya.edu/cse/',
      image: 'assets/images/port06.jpg',
      priority: 5
    }, {
      title: 'Nonapkin',
      link: 'https://itunes.apple.com/in/app/nonapkin-social-food-network/id699489033?mt=8',
      image: 'assets/images/port07.jpg',
      priority: 6
    }, {
      title: 'Nordlie',
      link: 'https://play.google.com/store/apps/details?id=dk.nordliefood.sales',
      image: 'assets/images/port01.jpg',
      priority: 7
    }, {
      title: 'Approves.it',
      link: 'https://play.google.com/store/apps/details?id=com.boiledbeans.approvesit',
      image: 'assets/images/port05.jpg',
      priority: 8
    }, {
      title: 'Camakshi',
      link: 'https://itunes.apple.com/us/app/camakshi/id702691987?mt=8',
      image: 'assets/images/port09.jpg',
      priority: 9
    }, {
      title: 'CloudFuze',
      link: 'https://itunes.apple.com/us/app/cloudfuze/id694718661?mt=8',
      image: 'assets/images/port08.jpg',
      priority: 10
    }];

    $scope.works = $filter('orderBy')($scope.works, 'priority');

    $scope.workRows = _.chunk($scope.works, 3);

  });
