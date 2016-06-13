angular.module('portfolio').controller('TNLiteracyCtrl', function ($scope, $http) {
  'use strict';

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
      var districtCenter = {};
      tamilNadu = map.selectAll('path').data(districts.features);

      //Enter
      tamilNadu.enter()
         .append('path')
         .attr('d', path)
         .attr('class', function (d) {
           return 'district ' + d.properties.DISTRICT;
         });

       _.each(districts.features, function (d) {
        svg.append('text')
         .attr('x', function () {
           return path.centroid(d)[0];
         })
         .attr('y', function () {
           return path.centroid(d)[1];
         })
         .text(function () {
           return d.properties.DISTRICT;
         });
       });

      var color;

      d3.json('assets/data/literacy-rates.json', function (error, data) {
        var minRate = Math.floor(_.chain(data).pluck('total').min().value());
        var maxRate = Math.ceil(_.chain(data).pluck('total').max().value());

        var getDistrictData = function (district) {
          return _.find(data, function (districtData) {
            return districtData.district === district;
          });
        };

        //Update
        color = d3.scale.linear().domain([minRate, maxRate]).range(['#EDF8E9', '#005A32']);
        tamilNadu.on('mouseover', function (d) {
                    tooltip.html(tooltipTemplate(getDistrictData(d.properties.DISTRICT)));
                    return tooltip.style('visibility', 'visible');
                  })
                  .on('mousemove', function () {
                    return tooltip.style('top', (event.pageY - 30) + 'px').style('left', (event.pageX + 30) + 'px');
                  })
                  .on('mouseout', function () {
                    return tooltip.style('visibility', 'hidden')
                  })
                  .attr('fill', function(d,i) {
                    return color(getDistrictData(d.properties.DISTRICT).total);
                  });

      });

      //Exit
      tamilNadu.exit().remove();
     });
  };

  TND3Handler();

});
