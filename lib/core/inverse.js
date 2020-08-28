"use strict";

/**
 * Calculate the inverse of given complex number, i.e. 1/z
 * @param { Complex } num - Complex number
 * @return { Complex } - Return the inverse
 */
function inverse(num) {
  if (!(num instanceof this)) {
    return this.NaN;
  }

  return this.divide(this.ONE, num);
}

module.exports = inverse;