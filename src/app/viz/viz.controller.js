'use strict';

angular.module('portfolio').controller('VizCtrl', function ($scope, $http) {

  var roadAccidentsHandler = function (response) {
    var years = _.map(response.data.fields.slice(2), function (field) {
      return parseInt(field.label);
    });
    var series = _.map(response.data.data, function (record) {
      var tmp = {};
      tmp.name = record[1];
      tmp.data = _.map(record.slice(2), function (value) {
        value = value.replace(/[,]/g, '');
        value = parseFloat(value);
        return isNaN(parseFloat(value)) ? null : value;
      });
      return tmp;
    });
    series = _.find(series, function (record) {
      return record.name === $scope.stateFilter;
    });
    if (series) {
      $('#chartContainer').highcharts({
        title: 'Total Number of Road Accidents in India',
        xAxis: {
          categories: years,
          title: 'Year'
        },
        yAxis: {
          title: 'Number of Road Accidents'
        },
        series: [series]
      });
    }
  };

  var crudeDeathRateHandler = function (response) {
    var years = _.map(response.data.fields.slice(2), function (field) {
      return parseInt(field.label);
    });
    var series = _.map(response.data.data, function (record) {
      var tmp = {};
      tmp.name = record[1];
      tmp.data = _.map(record.slice(2), function (value) {
        value = value.replace(/[,]/g, '');
        value = parseFloat(value);
        return isNaN(parseFloat(value)) ? null : value;
      });
      return tmp;
    });
    series = _.find(series, function (record) {
      return record.name === $scope.stateFilter;
    });
    if (series) {
      $('#chartContainer').highcharts({
        title: 'Crude Death Rate in India - 2011',
        xAxis: {
          categories: years,
          title: 'Year'
        },
        yAxis: {
          title: 'Crude Death Rate'
        },
        series: [series]
      });
    }
  };

  $scope.charts = [{
    name: 'Road accidents',
    url: 'assets/data/total-number-of-road-accidents-in-india.json',
    handler: roadAccidentsHandler
  }, {
    name: 'Crude death rate',
    url: 'assets/data/crude-death-rate-2011.json',
    handler: crudeDeathRateHandler
  }];

  $scope.status = {
    isopen: false
  };

  $scope.states = ["Andhra Pradesh", "Arunachal Pradesh", "Assam", "Bihar", "Chhattisgarh", "Goa", "Gujarat", "Haryana", "Himachal Pradesh", "Jammu & Kashmir", "Jharkhand", "Karnataka", "Kerala", "Madhya Pradesh", "Maharashtra", "Manipur", "Meghalaya", "Mizoram", "Nagaland", "Odisha", "Punjab", "Rajasthan", "Sikkim", "Tamil Nadu", "Tripura", "Uttarakhand", "Uttar Pradesh", "West Bengal", "Andaman & Nicobar Islands", "Chandigarh", "Dadra & Nagar Haveli", "Daman & Diu", "Delhi", "Lakshadweep", "Puducherry"];

  $scope.stateFilter = $scope.states[0];
  $scope.currentChart = $scope.charts[0];

  $scope.selectState = function (state, $event) {
    $event.preventDefault();
    $event.stopPropagation();
    $scope.status.isopen = !$scope.status.isopen;
    $scope.stateFilter = state;
  };

  $scope.populateMap = function (chart) {
    $scope.currentChart = chart;
    $http.get(chart.url).then(chart.handler);
  };

  $scope.$watch('stateFilter', function (newValue) {
    $scope.populateMap($scope.currentChart);
  });
});
