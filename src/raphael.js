function chart(paper) {
  var sinEdgeLength = Math.sin(angle) * edgeLength;

  var cosEdgeLength = Math.cos(angle) * edgeLength;

  if (typeof origin === 'undefined') {
    origin = {x: (4 * edgeLength) + Math.ceil(5 * cosEdgeLength), y: paper.height - Math.ceil(2 * sinEdgeLength)};
  }

  for (var i = 0, d; d = UK.ElectionMap.CONSTITUENCIES[i]; i++) {
    var x = origin.x + (d[0] * (edgeLength + cosEdgeLength)), y = origin.y - (d[1] * sinEdgeLength);

    var x1 = x + edgeLength, y1 = y + sinEdgeLength, y2 = y1 + sinEdgeLength;

    var hexagon = closedPath([x, y], [[x1, y], [x1 + cosEdgeLength, y1], [x1, y2], [x, y2], [x - cosEdgeLength, y1]]);

    paper.path(hexagon).attr({stroke: stroke, fill: fill(d), title: d[2]});
  }
}
