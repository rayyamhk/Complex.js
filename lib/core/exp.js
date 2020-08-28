"use strict";

/**
 * Calculate the exponential function with base E
 * @param { Complex } num - Exponent
 * @return { Complex } - Return the e to the power of num
 */
function exp(num) {
  if (!(num instanceof this)) {
    return this.NaN;
  }

  var re = num.getReal();
  var theta = num.getImaginary();
  var r = Math.exp(re);
  return new this(r * Math.cos(theta), r * Math.sin(theta));
}

module.exports = exp;