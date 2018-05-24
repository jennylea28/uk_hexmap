
var loadVisualisation = function(callback) {

  var svg = d3.select('#frame').append('svg').attr('width', 600).attr('height', 600);
  var map = UK.HexMap();
  document.getElementById('heading').innerHTML = variables[variable]['title'];

  var to_log = variable == 2 || variable == 4 || variable == 5;
  var data_array = [];

  var mindata = parseFloat(Number.POSITIVE_INFINITY);
  var maxdata = parseFloat(0);


  // Put the data in the data array and log transform it
  for (constituency in UK_ALL_DATA) {
    var data = parseFloat(UK_ALL_DATA[constituency][field_name]);
    data = to_log ? math.log(data) : data;

    if (isNaN(data)) {
      console.log(UK_ALL_DATA[constituency][field_name]);
      data = 0.0;
    }

    data_array.push(data);
  }

  var mean = math.mean(data_array);
  var std = math.std(data_array);

  var colourbuckets = bucketCount == 5 ?
                      [mean - std * 1.2, mean - std * 0.4,
                        mean + std * 0.4, mean + std * 1.2,
                        mean + std * 2.0] :
                      [mean - std * 1.5, mean - std * 0.9,
                        mean - std * 0.3, mean + std * 0.3,
                        mean + std * 0.9, mean + std * 1.5,
                        mean + std * 2.1];

  // Array of n + 1 objects
  // Including min and max value
  var x_data = bucketCount == 5 ?
              [mean - std * 2.0].concat(colourbuckets) :
              [mean - std * 2.1].concat(colourbuckets);

  var colour = d3.scaleThreshold()
    .domain(colourbuckets)
    .range(colourArray);

  map.fill(function(constituency) {

    if (UK_ALL_DATA[constituency]) {
      var data = UK_ALL_DATA[constituency][field_name];
      return to_log ? colour(math.log(data)) : colour(data);
    } else {
      console.log("Cannot find constituency " + constituency + " in data");
      return colourArray[Math.floor(Math.random() * colourArray.length)];;
    }
  });

  map.stroke('#333');

  map.origin({x:150, y:475});

  map(svg);

  var legendRectWidth = 60;
  var legendRectHeight = 20;
  var legendX = 375;
  var legendY = 80;

  var legend = d3.select('svg')
    .append("g")
    .selectAll("g")
    .data(colour.range().map(function(d) {
      // Gets the numbers that colour maps from -> to
      d = colour.invertExtent(d);
      if (d[0] == null) d[0] = x_data[0];
      if (d[1] == null) d[1] = x_data[1];
      return d;
    }))
    .enter()
    .append('g')
    .attr('class', 'legend')
    .attr('transform', function(d, i) {
        var x = legendX;
        var y = legendY + i * legendRectHeight;
        return 'translate(' + x + ',' + y + ')';
    });

    legend.append('rect')
      .attr('width', legendRectWidth)
      .attr('height', legendRectHeight)
      .style('fill', function(d) {

        // Find midpoint of the two values and that matching colour
        return colour((d[0] + d[1]) / 2)
      })
      .style('stroke', 'white');

    legend.append('text')
    .attr('class', 'legend-text')
    .attr('x', legendRectWidth + 8)
    .attr('y', legendRectHeight - 2)
    .text(function(d) {
      console.log(d);
      var lower = Math.round(d[0] * 100);
      var upper = Math.round(d[1] * 100);
      return lower + ' - ' + upper;
    });

  callback();

}

// FOR TESTING LOCALLY
