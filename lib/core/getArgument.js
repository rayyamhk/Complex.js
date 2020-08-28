"use strict";

/**
 * Note that the argument is restricted to the interval [ 0, 2 * PI )
 * If the given number is considered as 0, return undefined
 * @return { Number } - Return the argument of given complex number
 */
function getArgument() {
  var x = this.re;
  var y = this.im;
  var epsilon = 1 / (Math.pow(10, 15) * 2);

  if (Math.abs(x) < epsilon && Math.abs(y) < epsilon) {
    return undefined;
  }

  if (x === 0) {
    if (y > 0) {
      return Math.PI * 0.5;
    }

    return Math.PI * 1.5;
  }

  if (y === 0) {
    if (x > 0) {
      return 0;
    }

    return Math.PI;
  }

  if (x > 0 && y > 0) {
    return Math.atan(y / x);
  }

  if (x < 0 && y > 0) {
    return Math.PI - Math.atan(y / (x * -1));
  }

  if (x < 0 && y < 0) {
    return Math.PI + Math.atan(y * -1 / (x * -1));
  }

  return Math.PI * 2 - Math.atan(y * -1 / x);
}

module.exports = getArgument;