"use strict";

/**
 * Calculate the sine of given complex number
 * The domain is C
 * @param { Complex } num - Complex number
 * @return { Complex } - Return the result of complex sine function
 */
function sin(num) {
  if (!(num instanceof this)) {
    return this.NaN;
  }

  var a = num.getReal();
  var b = num.getImaginary();
  return new this(Math.sin(a) * Math.cosh(b), Math.cos(a) * Math.sinh(b));
}

module.exports = sin;