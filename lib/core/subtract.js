"use strict";

/**
 * Returns the difference of two complex numbers
 * @param { Complex } num1 - Complex number on the left of '-' sign
 * @param { Complex } num2 - Complex number on the right of '-' sign
 * @return { Complex } - Difference of two numbers
 */
function subtract(num1, num2) {
  if (!(num1 instanceof this) || !(num2 instanceof this)) {
    return this.NaN;
  }

  return new this(num1.re - num2.re, num1.im - num2.im);
}

module.exports = subtract;