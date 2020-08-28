"use strict";

/**
 * Calculate the inverse cosine function of given complex number
 * The domain is C
 * @param { Complex } num - Complex number
 * @return { Complex } - Return the result of inverse sine function
 */
function acos(num) {
  return this.subtract(new this(Math.PI / 2), this.asin(num));
}

module.exports = acos;