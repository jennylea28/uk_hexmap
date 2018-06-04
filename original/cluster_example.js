
function place_circle(region, label) {
region_name = region['name'].replace(/\s/g, '-');

var circle_radius = 60;

// Find the centres of the areas
var bbox = d3.select('#' + region_name).node().getBBox();
var x = bbox.x + bbox.width / 2;
var y = bbox.y  + bbox.height / 2;
d3.select("svg")
    .append("circle")
    .datum({
      "x": x,
      "y": y
    })
    .attr('class', 'select-circle')
    .attr("cx", x)
    .attr("cy", y)
    .attr("r", circle_radius)
    .attr("fill","none")
    .attr("stroke","black")
    .attr("stroke-width","2px")
    .append("title");
  d3.select("svg")
    .append("text")
    .attr("x", x + region['text_x'])
    .attr("y", y + region['text_y'])
    .attr("font-size", "30px")
    .text(label);
}

var loadVisualisation = function(bucketCount, colourScheme, variable) {

  var colourArray = window[colourScheme + "_" + bucketCount]

  var field_name = variables[variable]['field_name'];

  var svg = d3.select('#frame').append('svg').attr('width', 600).attr('height', 600);
  var map = UK.HexMap();

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

}
