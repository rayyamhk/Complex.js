"use strict";

/**
 * Calculate the cosecant of given complex number
 * The domain is C / { k * PI : k is any integer }
 * @param { Complex } num - Complex number
 * @return { Complex } - Return the result of complex cosecant function
 */
function csc(num) {
  return this.divide(this.ONE, this.sin(num));
}

module.exports = csc;