"use strict";

/**
 * Calculate the inverse secant function of given complex number
 * The domain is C / { 0 }
 * @param { Complex } num - Complex number
 * @return { Complex } - Return the result of inverse secant function
 */
function asec(num) {
  return this.acos(this.inverse(num));
}

module.exports = asec;