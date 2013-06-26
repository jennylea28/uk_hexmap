if (typeof UK === 'undefined') {
  var UK = {};
}

UK.ElectionMap = function () {
  var edgeLength = 5,
      stroke = '#AAAAAA';
      fill = 'none';
      origin = undefined;
      angle = (60 * (Math.PI / 180.0));

  function closedPath(point, points) {
    var tmp = [];

    tmp.push('M' + point[0] + ' ' + point[1]);

    for (var i = 0; point = points[i]; i++) {
      tmp.push('L' + point[0] + ' ' + point[1]);
    }

    tmp.push('z');

    return tmp.join('');
  }

  function chart() { }

  chart.edgeLength = function (_) {
    if (!arguments.length) return edgeLength;
    edgeLength = _;
    return chart;
  };

  chart.origin = function (_) {
    if (!arguments.length) return origin;
    origin = _;
    return chart;
  };

  chart.stroke = function (_) {
    if (!arguments.length) return stroke;
    stroke = _;
    return chart;
  };

  chart.fill = function (_) {
    fill = function (d) { return _(d[2]); };
    return chart;
  };

  return chart;
}
