/* vim:set ts=8 sts=2 sw=2 tw=0:
 * vim:set fdm=marker:
 *
 * File:        canvas.js
 * Version      0.1.0
 * Maintainer:  Shintaro Kaneko <kaneshin0120@gmail.com>
 * Last Change: 04-Aug-2012.
 */

/*
 * getCanvasById
 */
var getCanvasById = function(id) {
  var el = document.getElementById(id);
  return {
      self: el
    , context: el.getContext("2d")
    , width: el.width
    , height: el.height
    , bg_color: "rgba(0,0,0,0)"
  };
};

/*
 * CanvasManager
 */
var CanvasManager = function(canvas) {
  var that = {}
    , context = canvas.context
    , width = canvas.width
    , height = canvas.height
    , bg_color = canvas.bg_color
    ;
  that = {
    clearCanvas: function() {
      context.clearRect(0, 0, width, height);
    },
    fillCanvas: function(color) {
      context.fillStyle = color || bg_color;
      context.fillRect(0, 0, width, height);
    },
    setBackgroundColor: function(color) {
      bg_color = color || "rgba(0,0,0,0)";
    }
  };
  return that;
};

