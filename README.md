electionmap
===========


Re-usable UK election map visualisation, compatible with [D3](http://d3js.org/)
and [Raphaël](http://raphaeljs.com/).

Original: [Proportional election maps, without Flash](http://timcraft.com/2010/05/09/electionmap)

Demos: [D3 electionmap](http://bl.ocks.org/timcraft/5866773), [Raphaël electionmap](http://bl.ocks.org/timcraft/5867015)


D3 quick start
--------------

```javascript
var svg = d3.select('#frame').append('svg').attr('width', 330).attr('height', 430);

var map = UK.ElectionMap();

map(svg);
```


Raphaël quick start
-------------------

```javascript
var frame = Raphael('frame', 330, 430);

var map = UK.ElectionMap();

map(frame);
```


Options
-------

Use the **fill** setter to specify the fill function. The first argument to
the fill function is the name of the constituency. For example:

```javascript
map.fill(function (constituency) {
  // return colour representing political party for this constituency
});
```

Use the **stroke** setter to specify the stroke colour, which defaults to
`#AAAAAA`. For example:

```javascript
map.stroke('#333');
```

Use the **origin** setter to control the position of the map, passing an
object with `x` and `y` properties. By default the map is positioned in the
bottom left corner of its parent. Counter-intuitively, the origin specifies
the coordinates of the top left corner of the hexagonal tile that represents
the St. Ives constituency. For example:

```javascript
map.origin({x: 55, y: 395});
```

Use the **edgeLength** setter to specify the length of the hexagonal tiles
(defaults to 5 pixels). For example:

```javascript```
map.edgeLength(3);
```

All options/setters exist for both D3 and Raphaël.
