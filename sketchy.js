//////////////////////////////////////////
//              Sketchy.js              //
//////////////////////////////////////////
//
// JavaScript Shape Matching
// Works best with Raphael SketchPad
// Development started March 2013
//

// Immediately invoke an annonymous function to keep the global scope clean.
// Parameters:
// - global: will be the global object; called with "this" from global scope
// - undefined: keeps "undefined" undefined; no 2nd arg will make it undefined
(function(global, undefined) {
  // Namespace everything
  global.Sketchy = {};

  /* Jordan's Algorithms */
  // Test function for front-end application development
  Sketchy.randomShapeMatch = function(shape1, shape2) {
    return Math.random();
  };

  /* Kyle's Algorithms */
  // Takes in SVG data (from Raphael SketchPad) and outputs an array of paths,
  // each of which is an array of points in {x: Number, y: Number} format.
  // This is useful for preprocessing for Simplify.js or any other algorithm
  // operating on simple paths.
  Sketchy.convertSVGtoPointArrays = function(json) {
    var i, splitPath, j, point, paths;

    paths = [];
    json = JSON.parse(json);
    for(i=0; i<json.length; i++) {
      // Take the SVG data for the current path, cut off the M at the
      // beginning, and then explode the string into an array, split at
      // the "L" character.  This is the format from Raphael SketchPad
      splitPath = json[i].path.slice(1).split("L");
      paths[i] = [];
      for(j=0; j<splitPath.length; j++) {
        point = splitPath[j].split(",");
        paths[i][j] = {x: point[0], y: point[1]};
      }
    }
    return paths;
  };

  Sketchy.shapeContextMatch = function(shape1, shape2) {
    return 0;
  };

  // Compute the Euclidean distance (as a crow flies) between two points.
  // Shortest distance between two pixels
  Sketchy.euclideanDistance = function(x1, y1, x2, y2) {
    return Math.sqrt(Math.pow(x1-x2, 2) + Math.pow(y1-y2, 2));
  };

  // Compute the city block distance (or Manhattan distance) between two points.
  // Shortest 4-connected path between two pixels
  Sketchy.cityBlockDistance = function(x1, y1, x2, y2) {
    return Math.abs(x1-x2) + Math.abs(y1-y2);
  };

  // Compute the chessboard distance between two points.
  Sketchy.chessboardDistance = function(x1, y1, x2, y2) {
    return Math.max(Math.abs(x1-x2), Math.abs(y1-y2));
  };

  /* Betim's Algorithms */
  Sketchy.hausdorffDistance = function(shape1, shape2) {
  	return 0;
  };
})(this);
