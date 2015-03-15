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
        title: {
          text: 'Road Accidents'
        },
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
        title: {
          text: 'Crude Death Rate',
        },
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

  var noOfTeachersSecondaryHandler = function (response) {
    var years = _.map(response.data.fields.slice(3), function (field) {
      return parseInt(field.label);
    });
    var series = [];
    _.each(response.data.data, function (record) {
      if (record[1] === $scope.stateFilter) {
        var tmp = {};
        console.log(record);
        tmp.name = record[2];
        tmp.data = _.map(record.slice(3), function (value) {
          value = value.replace(/[,]/g, '');
          value = parseFloat(value);
          return isNaN(parseFloat(value)) ? null : value;
        });
        series.push(tmp);
      }
    });
    series = series.slice(6);
    console.log(series);
    if (series) {
      $('#chartContainer').highcharts({
        chart: {
          type: 'column'
        },
        title: {
          text: 'Teachers(Male/Female)'
        },
        xAxis: {
          categories: years,
          title: 'Year'
        },
        yAxis: {
          title: 'Number of teachers'
        },
        series: series
      });
    }
  };

  var TND3Handler = function () {
    $('#chartContainer').empty();
    var height = 600;
    var width = $('#chartContainer').width();
    var projection = d3.geo.mercator();
    var tamilNadu = void 0;

    // Special d3 helper that converts geo coordinates to paths
    // based on a projection
    var path = d3.geo.path().projection(projection);

    var svg = d3.select('#chartContainer')
        .append('svg')
        .attr('width', width)
        .attr('height', height);

    var tooltip = d3.select('body')
        .append('div')
        .style('color', '#FFFFFF')
        .style('position', 'absolute')
        .style('z-index', '10')
        .style('visibility', 'hidden');

    var tooltipTemplate = _.template('<div class="panel panel-info"><div class="panel-heading"><%= district %></div><table class="table"><tr><td>Rank</td><td><%= rank %></td></tr><tr><td>Total</td><td><%= total %>%</td></tr><tr><td>Male</td><td><%= male %>%</td></tr><tr><td>Female</td><td><%= female %>%</td></tr></table></div>');

    d3.json('assets/data/india-district.json', function(data) {
      var districts = topojson.feature(data, data.objects['2011_Dist']);
      districts.features = _.filter(districts.features, function (district) {
        return district.properties.ST_NM === 'Tamil Nadu';
      });

      // Setup the scale and translate
      var b, s, t;
      projection.scale(1).translate([0, 0]);
      var b = path.bounds(districts);
      var s = .95 / Math.max((b[1][0] - b[0][0]) / width, (b[1][1] - b[0][1]) / height);
      var t = [(width - s * (b[1][0] + b[0][0])) / 2, (height - s * (b[1][1] + b[0][1])) / 2];
      projection.scale(s).translate(t);

      var map = svg.append('g').attr('class', 'boundary');
      tamilNadu = map.selectAll('path').data(districts.features);

      //Enter
      tamilNadu.enter()
         .append('path')
         .attr('class', 'district')
         .attr('d', path);

      d3.json('assets/data/literacy-rates.json', function (error, data) {
        var minRate = Math.floor(_.chain(data).pluck('total').min().value());
        var maxRate = Math.ceil(_.chain(data).pluck('total').max().value());

        var getDistrictData = function (district) {
          return _.find(data, function (districtData) {
            return districtData.district === district;
          });
        };

        //Update
        var color = d3.scale.linear().domain([minRate, maxRate]).range(['#0000FF', '#00FF00']);
        tamilNadu.on('mouseover', function (d){ tooltip.html(tooltipTemplate(getDistrictData(d.properties.DISTRICT))); return tooltip.style('visibility', 'visible');})
                 .on('mousemove', function (){return tooltip.style('top', (event.pageY - 10) + 'px').style('left', (event.pageX + 10) + 'px');})
                 .on('mouseout', function (){return tooltip.style('visibility', 'hidden');})
                 .attr('fill', function(d,i) { return color(getDistrictData(d.properties.DISTRICT).total); });
      });

      //Exit
      tamilNadu.exit().remove();
     });
  };

  $scope.charts = [{
    name: 'Tamil Nadu Literacy Rates',
    handler: TND3Handler
  }, {
    name: 'Crude death rate',
    url: 'assets/data/crude-death-rate-2011.json',
    handler: crudeDeathRateHandler
  }, {
    name: 'Road accidents',
    url: 'assets/data/total-number-of-road-accidents-in-india.json',
    handler: roadAccidentsHandler
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
    if (chart.url) {
      $http.get(chart.url).then(chart.handler);
    } else {
      chart.handler.call();
    }
  };

  $scope.$watch('stateFilter', function (newValue) {
    $scope.populateMap($scope.currentChart);
  });
});
