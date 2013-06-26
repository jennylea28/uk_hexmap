function chart(svg) {
  var sinEdgeLength = Math.sin(angle) * edgeLength;

  var cosEdgeLength = Math.cos(angle) * edgeLength;

  if (typeof origin === 'undefined') {
    origin = {x: (4 * edgeLength) + Math.ceil(5 * cosEdgeLength), y: svg.attr('height') - Math.ceil(2 * sinEdgeLength)};
  }

  function path(d) {
    var x = origin.x + (d[0] * (edgeLength + cosEdgeLength)), y = origin.y - (d[1] * sinEdgeLength);

    var x1 = x + edgeLength, y1 = y + sinEdgeLength, y2 = y1 + sinEdgeLength;

    return closedPath([x, y], [[x1, y], [x1 + cosEdgeLength, y1], [x1, y2], [x, y2], [x - cosEdgeLength, y1]]);
  }

  var tiles = svg.selectAll('.constituency').data(UK.ElectionMap.CONSTITUENCIES).enter()
    .append('path')
      .attr('class', 'constituency')
      .attr('stroke', stroke)
      .attr('fill', fill)
      .attr('d', path);

  return tiles;
}
