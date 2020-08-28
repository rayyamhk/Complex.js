"use strict";

/**
 * Calculate the secant of given complex number
 * The domain is C / { ( 2k + 1) * PI / 2 : k is any integer }
 * @param { Complex } num - Complex number
 * @return { Complex } - Return the result of complex secant function
 */
function sec(num) {
  return this.divide(this.ONE, this.cos(num));
}

module.exports = sec;