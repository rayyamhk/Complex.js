"use strict";

/**
 * Calculate the tangent of given complex number
 * The domain is C / { ( 2k + 1) * PI / 2 : k is any integer }
 * @param { Complex } num - Complex number
 * @return { Complex } - Return the result of complex tangent function
 */
function tan(num) {
  return this.divide(this.sin(num), this.cos(num));
}

module.exports = tan;