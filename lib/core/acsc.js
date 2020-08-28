"use strict";

/**
 * Calculate the inverse cosecant function of given complex number
 * The domain is C / { 0 }
 * @param { Complex } num - Complex number
 * @return { Complex } - Return the result of inverse cosecant function
 */
function acsc(num) {
  return this.asin(this.inverse(num));
}

module.exports = acsc;