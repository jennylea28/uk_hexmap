var ElectionMap = (function () {
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
  ElectionMap(Raphael('frame', 330, 430), 55, 395, 5, function (constituency) {
    return UK_POLITICAL_PARTY_COLOURS[UK_GENERAL_ELECTION_RESULTS_2010[constituency]];
  });
}
