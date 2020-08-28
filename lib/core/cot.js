"use strict";

/**
 * Calculate the cotangent of given complex number
 * The domain is C / { k * PI / 2 : k is any integer }
 * Note that cot(PI / 2) should gives NaN instead of 0
 * because we won't introduce the concept of Infinity in this class
 * @param { Complex } num - Complex number
 * @return { Complex } - Return the result of complex cotangent function
 */
function cot(num) {
  return this.divide(this.ONE, this.tan(num));
}

module.exports = cot;