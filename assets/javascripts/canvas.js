/* vim:set ts=8 sts=2 sw=2 tw=0:
 * vim:set fdm=marker:
 *
 * File:        canvas.js
 * Version      0.1.0
 * Maintainer:  Shintaro Kaneko <kaneshin0120@gmail.com>
 * Last Change: 10-Aug-2012.
 */

/*
 * getCanvasById
 */
var getCanvasById = function(id) {
  var el = document.getElementById(id)
    ;

  return {
      self: el
    , context: el.getContext("2d")
    , width: el.width
    , height: el.height
    , background_color: "rgba(0,0,0,0)"
  };
};

/*
 * canvas_manager
 */
var canvas_manager = function(canvas) {
  var that = {}
    , context
    , width
    , height
    , min_w_h
    , background_color
    ;

  initialize();
  /* private function */
  function initialize() {
    context = canvas.context
    width = canvas.width
    height = canvas.height
    min_w_h = width < height ? width : height;
    background_color = canvas.background_color
  }
  /* public function */
  that = {
    clearCanvas: function() {
      context.clearRect(0, 0, width, height);
    }
  , fillCanvas: function(color) {
      context.fillStyle = color || background_color;
      context.fillRect(0, 0, width, height);
    }
  , setWidth: function(size) {
      width = size || min_w_h;
    }
  , setHeight: function(size) {
      height = size || min_w_h;
    }
  , setBackgroundColor: function(color) {
      background_color = color || "rgba(0,0,0,0)";
    }
  };
  return that;
};

