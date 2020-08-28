"use strict";

/**
 * @return { Number } - Return the modulus (length) of given complex number
 */
function getModulus() {
  return Math.sqrt(Math.pow(this.re, 2) + Math.pow(this.im, 2));
}

module.exports = getModulus;