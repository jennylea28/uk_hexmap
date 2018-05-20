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

window.onload = function () {
  var svg = d3.select('#frame').append('svg').attr('width', 500).attr('height', 430);

  var map = UK.HexMap();

  var pop_focus = 'pop0_19';

  var minpop = 100;
  var maxpop = 0;

  for (constituency in UK_POPULATIONS_BY_AGE) {
    var info = UK_POPULATIONS_BY_AGE[constituency];
    var pop = info[pop_focus] / info['popTotal'];
    minpop = Math.min(minpop, pop);
    maxpop = Math.max(maxpop, pop);
  }

  var buckets = d3.range(minpop, maxpop, (maxpop - minpop) / (bucketCount + 1));
  buckets.push(0.99);
  buckets.shift();

  var colour = d3.scaleThreshold()
    .domain(buckets)
    .range(colourArray);

  map.fill(function(constituency) {

    if (UK_POPULATIONS_BY_AGE[constituency]) {
      var popTotal = UK_POPULATIONS_BY_AGE[constituency]['popTotal'];
      var popPercent = UK_POPULATIONS_BY_AGE[constituency][pop_focus] / popTotal;
      return colour(popPercent);
    } else {
      console.log("Cannot find constituency " + constituency + " in data");
      return colourArray[Math.floor(Math.random() * colourArray.length)];;
    }
  });

  map.stroke('#333');

  map.origin({x:100, y:395});

  map(svg);

}
