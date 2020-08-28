"use strict";

/**
 * Calculate the natural log of given complex number
 * Note that complex log is a multivalued function,
 * But this function only provides the principal value by
 * restricting the imaginary part to the interval [0, 2 * Pi).
 * @param { Complex } num - Complex number
 * @return { Complex } - Return the result after taking natural log
 */
function log(num) {
  if (!(num instanceof this)) {
    return this.NaN;
  }

  var r = num.getModulus();
  var theta = num.getArgument();

  if (r < this.EPSILON || theta === undefined) {
    return this.NaN;
  }

  return new this(Math.log(r), theta);
}

module.exports = log;