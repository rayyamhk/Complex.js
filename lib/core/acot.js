"use strict";

/**
 * Calculate the inverse cotangent function of given complex number
 * The domain is C / { i, -i, 0 }
 * @param { Complex } num - Complex number
 * @return { Complex } - Return the result of inverse cotangent function
 */
function acot(num) {
  return this.atan(this.inverse(num));
}

module.exports = acot;