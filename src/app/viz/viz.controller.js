'use strict';

angular.module('portfolio').controller('VizCtrl', function ($scope, $http) {

  $scope.status = {
    isopen: false
  };

  $scope.selectState = function (state, $event) {
    $event.preventDefault();
    $event.stopPropagation();
    $scope.status.isopen = !$scope.status.isopen;
    $scope.selectedState = state;
  };

  $scope.$watch('selectedState', function () {
    var series = _.find($scope.series, function (record) {
      return record.name === $scope.selectedState;
    });
    if (series) {
      $('#total-number-of-road-accidents-in-india').highcharts({
        title: 'Total Number of Road Accidents in India',
        xAxis: {
          categories: $scope.years,
          title: 'Year'
        },
        yAxis: {
          title: 'Number of Road Accidents'
        },
        series: [series]
      });
    }
  });

  $http.get('assets/data/total-number-of-road-accidents-in-india.json').then(function (response) {
    $scope.years = _.map(response.data.fields.slice(2), function (field) {
      return parseInt(field.label);
    });
    $scope.series = _.map(response.data.data, function (record) {
      var tmp = {};
      tmp.name = record[1];
      tmp.data = _.map(record.slice(2), function (value) {
        value = value.replace(/[,]/g, '');
        return parseFloat(value);
      });
      return tmp;
    });
    $scope.states = _.pluck($scope.series, 'name');
    $scope.selectedState = $scope.states[0];
  });
});
