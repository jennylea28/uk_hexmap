var HexMap = (function () {
  var ANGLE = (60 * (Math.PI / 180.0));

  function closedPath(point, points) {
    var tmp = [];

    tmp.push('M' + point[0] + ' ' + point[1]);

    for (var i = 0; i < points.length; i++) {
      var point = points[i];

      tmp.push('L' + point[0] + ' ' + point[1]);
    }

    tmp.push('z');

    return tmp.join('');
  }

  return function (canvas, ox, oy, size, fillfn) {
    var ssin = size * Math.sin(ANGLE);

    var scos = size * Math.cos(ANGLE);

    for (var i = 0; i < 650; i++) {
      var constituency = UK_CONSTITUENCIES[i];

      var x = ox + (constituency[0] * (size + scos)), y = oy - (constituency[1] * ssin);

      var x1 = x + size, y1 = y + ssin, y2 = y1 + ssin;

      var hexagon = closedPath([x, y], [[x1, y], [x1 + scos, y1], [x1, y2], [x, y2], [x - scos, y1]]);

      canvas.path(hexagon).attr({stroke: '#AAAAAA', fill: fillfn(constituency[2]), title: constituency[2]});
    }
  }
})();

var loadVisualisation = function(callback) {
  var svg = d3.select('#frame').append('svg').attr('width', 500).attr('height', 430);

  var map = UK.HexMap();

  var mindata = Number.POSITIVE_INFINITY;
  var maxdata = 0;

  document.getElementById('heading').innerHTML = variables[variable]['title'];

  for (constituency in UK_ALL_DATA) {
    var info = UK_ALL_DATA[constituency];
    var data = info[field_name];
    mindata = Math.min(mindata, data);
    maxdata = Math.max(maxdata, data);
  }

  var buckets = d3.range(mindata, maxdata, (maxdata - mindata) / (bucketCount + 1));
  buckets.push(Number.POSITIVE_INFINITY);
  buckets.shift();

  var colour = d3.scaleThreshold()
    .domain(buckets)
    .range(colourArray);

  map.fill(function(constituency) {

    if (UK_ALL_DATA[constituency]) {
      var data = UK_ALL_DATA[constituency][field_name];
      return colour(data);
    } else {
      console.log("Cannot find constituency " + constituency + " in data");
      return colourArray[Math.floor(Math.random() * colourArray.length)];;
    }
  });

  map.stroke('#333');

  map.origin({x:100, y:395});

  map(svg);

  callback();

}

// FOR TESTING LOCALLY
// window.onload = loadVisualisation();
