/* vim:set ts=8 sts=2 sw=2 tw=0:
 * vim:set fdm=marker:
 *
 * File:        nyancat.js
 * Maintainer:  Shintaro Kaneko <kaneshin0120@gmail.com>
 * Last Change: 04-Aug-2012.
 */

/*
 * Particle bit pattern data
 * {{{ */
var particle_data = [
  [ [0, 0, 0, 0, 0, 0, 0]
  , [0, 0, 0, 0, 0, 0, 0]
  , [0, 0, 0, 0, 0, 0, 0]
  , [0, 0, 0, 1, 0, 0, 0]
  , [0, 0, 0, 0, 0, 0, 0]
  , [0, 0, 0, 0, 0, 0, 0]
  , [0, 0, 0, 0, 0, 0, 0]
  ]
, [ [0, 0, 0, 0, 0, 0, 0]
  , [0, 0, 0, 0, 0, 0, 0]
  , [0, 0, 1, 0, 1, 0, 0]
  , [0, 0, 0, 1, 0, 0, 0]
  , [0, 0, 1, 0, 1, 0, 0]
  , [0, 0, 0, 0, 0, 0, 0]
  , [0, 0, 0, 0, 0, 0, 0]
  ]
, [ [0, 0, 0, 0, 0, 0, 0]
  , [0, 1, 0, 0, 0, 1, 0]
  , [0, 0, 1, 0, 1, 0, 0]
  , [0, 0, 0, 0, 0, 0, 0]
  , [0, 0, 1, 0, 1, 0, 0]
  , [0, 1, 0, 0, 0, 1, 0]
  , [0, 0, 0, 0, 0, 0, 0]
  ]
, [ [1, 0, 0, 0, 0, 0, 1]
  , [0, 1, 0, 0, 0, 1, 0]
  , [0, 0, 0, 0, 0, 0, 0]
  , [0, 0, 0, 1, 0, 0, 0]
  , [0, 0, 0, 0, 0, 0, 0]
  , [0, 1, 0, 0, 0, 1, 0]
  , [1, 0, 0, 0, 0, 0, 1]
  ]
, [ [1, 0, 0, 0, 0, 0, 1]
  , [0, 0, 0, 0, 0, 0, 0]
  , [0, 0, 0, 0, 0, 0, 0]
  , [0, 0, 0, 0, 0, 0, 0]
  , [0, 0, 0, 0, 0, 0, 0]
  , [0, 0, 0, 0, 0, 0, 0]
  , [1, 0, 0, 0, 0, 0, 1]
  ]
];
/* }}} */

/*
 * Particle Class
 * {{{ */
var Particle = function(spec, canvas) {
  var that = {}
    , context = canvas.context
    , width = canvas.width
    , height = canvas.height
    , k = spec.k
    , color = spec.color
    , dot = spec.dot
    , x_span = spec.x_span
    , x_range = spec.x_range
    , particle_data_nr = particle_data.length
    , particle_data_lines = particle_data[0].length
    , particle_data_columns = particle_data[0][0].length
    , x = (width + x_range) * Math.random() + x_range
    , y = height * Math.random()
    ;

  that = {
    draw: function () {
      context.fillStyle = color;
      for (var i = 0; i < particle_data_lines; i++) {
        for (var j = 0; j < particle_data_columns; j++) {
          switch (particle_data[k][i][j]) {
            case 1:
              context.fillRect(
                  x + i * dot - k * x_span, y + j * dot, dot, dot);
              break;
            case 0:
              break;
            default:
              break;
          }
        }
      }
      k++;
      if (k > particle_data_nr - 1) {
        k = 0;
        x = (width + x_range) * Math.random() + x_range;
        y = height * Math.random();
      }
    },
  };
  return that;
};
/* }}} */

/*
 * NyanCat bit pattern data
 * {{{ */
var nyancat_data = [
  [[0,0,0,0,0,0,0,0,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,0,0,0,0,0,0,0]
  ,[0,0,0,0,0,0,0,0,1,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,1,0,0,0,0,0,0,0]
  ,[0,0,0,0,0,0,0,1,4,4,4,3,3,3,3,3,3,3,3,3,3,3,3,4,4,4,1,0,0,0,0,0,0]
  ,[0,0,0,0,0,0,0,1,4,4,3,3,3,3,3,7,3,3,7,3,3,3,3,3,4,4,1,0,0,0,0,0,0]
  ,[0,0,0,0,0,0,0,1,4,3,3,7,3,3,3,3,3,3,1,1,3,7,3,3,3,4,1,0,1,1,0,0,0]
  ,[0,0,0,0,0,0,0,1,4,3,3,3,3,3,3,3,3,1,2,2,1,3,3,3,3,4,1,1,2,2,1,0,0]
  ,[0,0,1,1,0,0,0,1,4,3,3,3,3,3,7,3,3,1,2,2,2,1,3,3,3,4,1,2,2,2,1,0,0]
  ,[0,1,2,2,1,0,0,1,4,3,3,3,7,3,3,3,3,1,2,2,2,2,1,1,1,1,2,2,2,2,1,0,0]
  ,[0,1,2,2,2,1,0,1,4,3,3,3,3,3,3,7,1,2,2,2,2,2,2,2,2,2,2,2,2,2,2,1,0]
  ,[0,0,1,2,2,2,1,1,4,3,7,3,3,3,3,3,1,2,2,2,5,1,2,2,2,2,2,5,1,2,2,1,0]
  ,[0,0,0,1,2,2,2,1,4,3,3,3,3,3,3,3,1,2,2,2,1,1,2,2,2,1,2,1,1,2,2,1,0]
  ,[0,0,0,0,1,1,1,1,4,3,3,3,3,3,7,3,1,2,6,6,2,2,2,2,2,2,2,2,2,6,6,1,0]
  ,[0,0,0,0,0,0,0,1,4,4,3,7,3,3,3,3,1,2,6,6,2,1,2,2,1,2,2,1,2,6,6,1,0]
  ,[0,0,0,0,0,0,0,1,4,4,4,3,3,3,3,3,3,1,2,2,2,1,1,1,1,1,1,1,2,2,1,0,0]
  ,[0,0,0,0,0,0,1,1,1,4,4,4,4,4,4,4,4,4,1,2,2,2,2,2,2,2,2,2,2,1,0,0,0]
  ,[0,0,0,0,0,1,2,2,2,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,0,0,0]
  ,[0,0,0,0,0,1,2,2,1,1,0,1,2,2,1,0,0,0,0,1,2,2,1,0,1,2,2,1,0,0,0,0,0]
  ,[0,0,0,0,0,1,1,1,1,0,0,1,1,1,0,0,0,0,0,0,1,1,1,0,0,1,1,0,0,0,0,0,0]
  ,[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
  ]
, [[0,0,0,0,0,0,0,0,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,0,0,0,0,0,0,0]
  ,[0,0,0,0,0,0,0,0,1,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,1,0,0,0,0,0,0,0]
  ,[0,0,0,0,0,0,0,1,4,4,4,3,3,3,3,3,3,3,3,3,3,3,3,4,4,4,1,0,0,0,0,0,0]
  ,[0,0,0,0,0,0,0,1,4,4,3,3,3,3,3,7,3,3,7,3,3,3,3,3,4,4,1,0,0,0,0,0,0]
  ,[0,0,0,0,0,0,0,1,4,3,3,7,3,3,3,3,3,3,3,1,1,3,7,3,3,4,1,0,0,1,1,0,0]
  ,[0,0,0,0,0,0,0,1,4,3,3,3,3,3,3,3,3,3,1,2,2,1,3,3,3,4,1,0,1,2,2,1,0]
  ,[0,0,0,0,0,0,0,1,4,3,3,3,3,3,7,3,3,3,1,2,2,2,1,3,3,4,1,1,2,2,2,1,0]
  ,[0,0,1,1,0,0,0,1,4,3,3,3,7,3,3,3,3,3,1,2,2,2,2,1,1,1,1,2,2,2,2,1,0]
  ,[0,1,2,2,1,0,0,1,4,3,3,3,3,3,3,7,3,1,2,2,2,2,2,2,2,2,2,2,2,2,2,2,1]
  ,[0,1,2,2,2,1,1,1,4,3,7,3,3,3,3,3,3,1,2,2,2,5,1,2,2,2,2,2,5,1,2,2,1]
  ,[0,0,1,1,2,2,2,1,4,3,3,3,3,3,3,3,3,1,2,2,2,1,1,2,2,2,1,2,1,1,2,2,1]
  ,[0,0,0,1,1,1,1,1,4,3,3,3,3,3,7,3,3,1,2,6,6,2,2,2,2,2,2,2,2,2,6,6,1]
  ,[0,0,0,0,0,0,0,1,4,4,3,7,3,3,3,3,3,1,2,6,6,2,1,2,2,1,2,2,1,2,6,6,1]
  ,[0,0,0,0,0,0,0,1,4,4,4,3,3,3,3,3,3,3,1,2,2,2,1,1,1,1,1,1,1,2,2,1,0]
  ,[0,0,0,0,0,0,0,1,1,4,4,4,4,4,4,4,4,4,4,1,2,2,2,2,2,2,2,2,2,2,1,0,0]
  ,[0,0,0,0,0,0,1,2,2,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,0,0]
  ,[0,0,0,0,0,0,1,2,2,1,0,1,2,2,1,0,0,0,0,0,1,2,2,1,0,1,2,2,1,0,0,0,0]
  ,[0,0,0,0,0,0,1,1,1,0,0,0,1,1,1,0,0,0,0,0,0,1,1,1,0,0,1,1,1,0,0,0,0]
  ,[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
  ]
, [[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
  ,[0,0,0,0,0,0,0,0,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,0,0,0,0,0,0,0]
  ,[0,0,0,0,0,0,0,0,1,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,1,0,0,0,0,0,0,0]
  ,[0,0,0,0,0,0,0,1,4,4,4,3,3,3,3,3,3,3,3,3,3,3,3,4,4,4,1,0,0,0,0,0,0]
  ,[0,0,0,0,0,0,0,1,4,4,3,3,3,3,3,7,3,3,7,3,3,3,3,3,4,4,1,0,0,0,0,0,0]
  ,[0,0,0,0,0,0,0,1,4,3,3,7,3,3,3,3,3,3,3,1,1,3,7,3,3,4,1,0,0,1,1,0,0]
  ,[0,0,0,0,0,0,0,1,4,3,3,3,3,3,3,3,3,3,1,2,2,1,3,3,3,4,1,0,1,2,2,1,0]
  ,[0,0,0,0,0,0,0,1,4,3,3,3,3,3,7,3,3,3,1,2,2,2,1,3,3,4,1,1,2,2,2,1,0]
  ,[0,0,0,0,0,0,0,1,4,3,3,3,7,3,3,3,3,3,1,2,2,2,2,1,1,1,1,2,2,2,2,1,0]
  ,[0,0,0,0,0,0,0,1,4,3,3,3,3,3,3,7,3,1,2,2,2,2,2,2,2,2,2,2,2,2,2,2,1]
  ,[0,0,0,0,0,0,1,1,4,3,7,3,3,3,3,3,3,1,2,2,2,5,1,2,2,2,2,2,5,1,2,2,1]
  ,[0,0,0,1,1,1,2,1,4,3,3,3,3,3,3,3,3,1,2,2,2,1,1,2,2,2,1,2,1,1,2,2,1]
  ,[0,0,1,2,2,2,1,1,4,3,3,3,3,3,7,3,3,1,2,6,6,2,2,2,2,2,2,2,2,2,6,6,1]
  ,[0,1,2,2,1,1,0,1,4,4,3,7,3,3,3,3,3,1,2,6,6,2,1,2,2,1,2,2,1,2,6,6,1]
  ,[0,0,1,1,0,0,0,1,4,4,4,3,3,3,3,3,3,3,1,2,2,2,1,1,1,1,1,1,1,2,2,1,0]
  ,[0,0,0,0,0,0,0,1,1,4,4,4,4,4,4,4,4,4,4,1,2,2,2,2,2,2,2,2,2,2,1,0,0]
  ,[0,0,0,0,0,0,0,1,2,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,0,0]
  ,[0,0,0,0,0,0,0,1,2,2,1,0,1,2,2,1,0,0,0,0,0,1,2,2,1,0,1,2,2,1,0,0,0]
  ,[0,0,0,0,0,0,0,1,1,1,0,0,0,1,1,1,0,0,0,0,0,0,1,1,1,0,0,1,1,1,0,0,0]
  ]
, [[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
  ,[0,0,0,0,0,0,0,0,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,0,0,0,0,0,0,0]
  ,[0,0,0,0,0,0,0,0,1,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,1,0,0,0,0,0,0,0]
  ,[0,0,0,0,0,0,0,1,4,4,4,3,3,3,3,3,3,3,3,3,3,3,3,4,4,4,1,0,0,0,0,0,0]
  ,[0,0,0,0,0,0,0,1,4,4,3,3,3,3,3,7,3,3,7,3,3,3,3,3,4,4,1,0,0,0,0,0,0]
  ,[0,0,0,0,0,0,0,1,4,3,3,7,3,3,3,3,3,3,3,1,1,3,7,3,3,4,1,0,0,1,1,0,0]
  ,[0,0,0,0,0,0,0,1,4,3,3,3,3,3,3,3,3,3,1,2,2,1,3,3,3,4,1,0,1,2,2,1,0]
  ,[0,0,0,0,0,0,0,1,4,3,3,3,3,3,7,3,3,3,1,2,2,2,1,3,3,4,1,1,2,2,2,1,0]
  ,[0,0,0,0,0,0,0,1,4,3,3,3,7,3,3,3,3,3,1,2,2,2,2,1,1,1,1,2,2,2,2,1,0]
  ,[0,0,0,0,0,0,0,1,4,3,3,3,3,3,3,7,3,1,2,2,2,2,2,2,2,2,2,2,2,2,2,2,1]
  ,[0,0,0,0,0,1,1,1,4,3,7,3,3,3,3,3,3,1,2,2,2,5,1,2,2,2,2,2,5,1,2,2,1]
  ,[0,0,0,1,1,2,2,1,4,3,3,3,3,3,3,3,3,1,2,2,2,1,1,2,2,2,1,2,1,1,2,2,1]
  ,[0,0,1,2,2,2,1,1,4,3,3,3,3,3,7,3,3,1,2,6,6,2,2,2,2,2,2,2,2,2,6,6,1]
  ,[0,1,2,2,1,1,0,1,4,4,3,7,3,3,3,3,3,1,2,6,6,2,1,2,2,1,2,2,1,2,6,6,1]
  ,[0,1,2,2,1,0,0,1,4,4,4,3,3,3,3,3,3,3,1,2,2,2,1,1,1,1,1,1,1,2,2,1,0]
  ,[0,0,1,1,0,0,0,1,1,4,4,4,4,4,4,4,4,4,4,1,2,2,2,2,2,2,2,2,2,2,1,0,0]
  ,[0,0,0,0,0,0,1,2,2,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,0,0]
  ,[0,0,0,0,0,0,1,2,2,1,0,1,2,2,1,0,0,0,0,0,1,2,2,1,0,1,2,2,1,0,0,0,0]
  ,[0,0,0,0,0,0,1,1,1,0,0,0,1,1,1,0,0,0,0,0,0,1,1,1,0,0,1,1,1,0,0,0,0]
  ]
, [[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
  ,[0,0,0,0,0,0,0,0,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,0,0,0,0,0,0,0]
  ,[0,0,0,0,0,0,0,0,1,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,1,0,0,0,0,0,0,0]
  ,[0,0,0,0,0,0,0,1,4,4,4,3,3,3,3,3,3,3,3,3,3,3,3,4,4,4,1,0,0,0,0,0,0]
  ,[0,0,0,0,0,0,0,1,4,4,3,3,3,3,3,7,3,3,7,3,3,3,3,3,4,4,1,0,0,0,0,0,0]
  ,[0,0,0,0,0,0,0,1,4,3,3,7,3,3,3,3,3,3,1,1,3,7,3,3,3,4,1,0,1,1,0,0,0]
  ,[0,0,0,0,0,0,0,1,4,3,3,3,3,3,3,3,3,1,2,2,1,3,3,3,3,4,1,1,2,2,1,0,0]
  ,[0,0,0,0,0,0,0,1,4,3,3,3,3,3,7,3,3,1,2,2,2,1,3,3,3,4,1,2,2,2,1,0,0]
  ,[0,1,1,1,1,0,0,1,4,3,3,3,7,3,3,3,3,1,2,2,2,2,1,1,1,1,2,2,2,2,1,0,0]
  ,[1,2,2,2,1,1,1,1,4,3,3,3,3,3,3,7,1,2,2,2,2,2,2,2,2,2,2,2,2,2,2,1,0]
  ,[1,1,2,2,2,2,1,1,4,3,7,3,3,3,3,3,1,2,2,2,5,1,2,2,2,2,2,5,1,2,2,1,0]
  ,[0,0,1,1,1,2,2,1,4,3,3,3,3,3,3,3,1,2,2,2,1,1,2,2,2,1,2,1,1,2,2,1,0]
  ,[0,0,0,0,0,1,1,1,4,3,3,3,3,3,7,3,1,2,6,6,2,2,2,2,2,2,2,2,2,6,6,1,0]
  ,[0,0,0,0,0,0,0,1,4,4,3,7,3,3,3,3,1,2,6,6,2,1,2,2,1,2,2,1,2,6,6,1,0]
  ,[0,0,0,0,0,0,0,1,4,4,4,3,3,3,3,3,3,1,2,2,2,1,1,1,1,1,1,1,2,2,1,0,0]
  ,[0,0,0,0,0,0,1,1,1,4,4,4,4,4,4,4,4,4,1,2,2,2,2,2,2,2,2,2,2,1,0,0,0]
  ,[0,0,0,0,0,1,2,2,2,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,0,0]
  ,[0,0,0,0,0,1,2,2,1,0,1,2,2,1,0,0,0,0,0,1,2,2,1,0,1,2,2,1,0,0,0,0,0]
  ,[0,0,0,0,0,1,1,1,0,0,0,1,1,1,0,0,0,0,0,0,1,1,1,0,0,1,1,1,0,0,0,0,0]
  ]
, [[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
  ,[0,0,0,0,0,0,0,0,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,0,0,0,0,0,0,0]
  ,[0,0,0,0,0,0,0,0,1,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,1,0,0,0,0,0,0,0]
  ,[0,0,0,0,0,0,0,1,4,4,4,3,3,3,3,3,3,3,3,3,3,3,3,4,4,4,1,0,0,0,0,0,0]
  ,[0,0,0,0,0,0,0,1,4,4,3,3,3,3,3,7,3,7,1,1,3,3,3,3,4,4,1,0,1,1,0,0,0]
  ,[0,0,0,0,0,0,0,1,4,3,3,7,3,3,3,3,3,1,2,2,1,7,3,3,3,4,1,1,2,2,1,0,0]
  ,[0,0,0,0,0,0,0,1,4,3,3,3,3,3,3,3,3,1,2,2,2,1,3,3,3,4,1,2,2,2,1,0,0]
  ,[0,0,1,1,0,0,0,1,4,3,3,3,3,3,7,3,3,1,2,2,2,2,1,1,1,1,2,2,2,2,1,0,0]
  ,[0,1,2,2,1,0,0,1,4,3,3,3,7,3,3,3,1,2,2,2,2,2,2,2,2,2,2,2,2,2,2,1,0]
  ,[0,1,2,2,1,1,1,1,4,3,3,3,3,3,3,7,1,2,2,2,5,1,2,2,2,2,2,5,1,2,2,1,0]
  ,[0,0,1,2,2,2,1,1,4,3,7,3,3,3,3,3,1,2,2,2,1,1,2,2,2,1,2,1,1,2,2,1,0]
  ,[0,0,0,1,1,2,2,1,4,3,3,3,3,3,3,3,1,2,6,6,2,2,2,2,2,2,2,2,2,6,6,1,0]
  ,[0,0,0,0,0,1,1,1,4,3,3,3,3,3,7,3,1,2,6,6,2,1,2,2,1,2,2,1,2,6,6,1,0]
  ,[0,0,0,0,0,0,0,1,4,4,3,7,3,3,3,3,3,1,2,2,2,1,1,1,1,1,1,1,2,2,1,0,0]
  ,[0,0,0,0,0,0,0,1,4,4,4,3,3,3,3,3,3,3,1,2,2,2,2,2,2,2,2,2,2,1,0,0,0]
  ,[0,0,0,0,0,0,1,1,1,4,4,4,4,4,4,4,4,4,4,1,1,1,1,1,1,1,1,1,1,0,0,0,0]
  ,[0,0,0,0,0,1,2,2,2,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,0,0,0,0]
  ,[0,0,0,0,0,1,2,2,1,0,1,2,2,1,0,0,0,0,0,1,2,2,1,0,1,2,2,1,0,0,0,0,0]
  ,[0,0,0,0,0,1,1,1,0,0,1,1,1,0,0,0,0,0,0,1,1,1,0,0,0,1,1,1,0,0,0,0,0]
  ]
];
/* }}} */

/*
 * NyanCat Class
 * {{{ */
var NyanCat = function(spec, canvas) {
  var that = {}
    , context = canvas.context
    , x = spec.x
    , y = spec.y
    , dot = spec.dot
    , nyancat_data_nr = nyancat_data.length
    , nyancat_data_lines = nyancat_data[0].length
    , nyancat_data_columns = nyancat_data[0][0].length
    , k = 0
    ;

  that = {
    draw: function () {
      for (var i = 0; i < nyancat_data_lines; i++) {
        for (var j = 0; j < nyancat_data_columns; j++) {
          switch (nyancat_data[k][i][j]) {
            case 1: // #000000
              context.fillStyle = 'rgb(0,0,0)';
              break;
            case 2: // #999999
              context.fillStyle = 'rgb(153,153,153)';
              break;
            case 3: // #ff99cc
              context.fillStyle = 'rgb(255,153,204)';
              break;
            case 4: // #ffcc99
              context.fillStyle = 'rgb(255,204,153)';
              break;
            case 5: // #ffffff
              context.fillStyle = 'rgb(255,255,255)';
              break;
            case 6: // #ff6699
              context.fillStyle = 'rgb(255,102,153)';
              break;
            case 7: // #ff3399
              context.fillStyle = 'rgb(255,51,153)';
              break;
            case 0:
              context.fillStyle = 'rgba(0,0,0,0)';
              break;
            default:
              context.fillStyle = 'rgba(0,0,0,0)';
              break;
          }
        context.fillRect(x + j * dot, y + i * dot, dot, dot);
        }
      }
      k++;
      if (k > nyancat_data_nr - 1) {
        k = 0;
      }
    },
  };
  return that;
};
/* }}} */

/*
 * Rainbow
 * {{{ */
var Rainbow = function(spec, canvas) {
  var that = {}
    , context = canvas.context
    , colors = spec.colors
    , color_nr = colors.length
    , width = spec.width
    , weight = spec.weight
    , x0 = spec.x0
    , y0 = spec.y0 - weight
    , number = x0 / width + 2 >> 0
    , reverse = 1
    , step = weight / 2 >> 0
    , f = 0
    , fps_rainbow = 5
    , y_pos = new Array(number)
    ;

  that = {
    draw: function() {
      for (var i = 0; i < number; i++) {
        switch (i % 6) {
          case 0: case 4:
            y_pos[i] = y0 + reverse * step;
            break;
          case 1: case 3:
            y_pos[i] = y0;
            break;
          case 2:
            y_pos[i] = y0 - reverse * step;
            break;
          case 5:
            y_pos[i] = y0 + reverse * weight;
            break;
          default:
            break;
        }
      }
      for(var i = 0, x = x0, y; i < number; i++) {
        y = y_pos[i];
        for (var color in colors) {
          context.fillStyle = colors[color];
          context.fillRect(x, y, width, weight);
          y += weight;
        }
        y -= weight * color_nr;
        x -= width;
      }
      // reverse direction of rainbow
      if (++f > fps_rainbow) {
        f = 0;
        reverse = -reverse;
      }
    }
  };
  return that;
};
/* }}} */

/*
 * NyanCatCanvas Class
 * {{{ */
var NyanCatCanvas = function(nyancat_spec, cvs) {
  var that = {}
    , canvas_mgr
    , rainbow
    , nyancat
    , particle
    , fps = 1000 / 15 >> 0
    ;
  that = {
    init: function() {
      canvas_mgr = new CanvasManager(cvs);
      canvas_mgr.setBackgroundColor("rgb(0,51,153)");
      rainbow = new Rainbow({
          x0 : nyancat_spec.x + nyancat_spec.dot * 2
        , y0 : nyancat_spec.y + nyancat_spec.dot * 5
        , width : nyancat_spec.dot * 7
        , weight: nyancat_spec.dot * 2
        , colors : [
            'rgb(255, 0, 0)'    // red
          , 'rgb(255, 153, 0)'  // orange
          , 'rgb(255, 255, 0)'  // yellow
          , 'rgb(0, 255, 0)'    // green
          , 'rgb(0, 0, 255)'    // blue
          , 'rgb(102, 0, 153)'  // purple
        ]
      }, cvs);
      nyancat = new NyanCat(nyancat_spec, cvs);
      particle = new Array(nyancat_spec.particle_nr);
      for (var i = 0; i < particle.length; i++) {
        particle[i] = new Particle({
            k: i % particle_data.length
          , color: 'rgb(255, 255, 255)'
          , dot: nyancat_spec.dot / 2 >> 0
          , x_span: nyancat_spec.dot * 5
          , x_range: nyancat_spec.dot * 10
        }, cvs);
      }
    },
    start: function() {
      nyan_interval = setInterval(function () {
        canvas_mgr.fillCanvas();
        rainbow.draw();
        nyancat.draw();
        for (var i = 0; i < particle.length; i++) {
          particle[i].draw();
        }
      }, fps);
    },
    stop: function() {
      clearInterval(nyan_interval);
    }
  };
  return that;
};
/* }}} */

var cvs = getCanvasById("nyancat");
var nccanvas = new NyanCatCanvas({
    x: 300
  , y: 300
  , dot: 9
  , particle_nr: 10
}, cvs);

nccanvas.init();
nccanvas.start();

setTimeout(function() {
  nccanvas.stop();
  setTimeout(function() {
    nccanvas.start();
  }, 1000);
}, 1000);

