"use strict";

/**
 * Calculate the complex conjugate of given complex number
 * @param { Complex } num - Complex number
 * @return { Complex } - Return the complex conjugate
 */
function conjugate(num) {
  if (!(num instanceof this)) {
    return this.NaN;
  }

  return new this(num.getReal(), num.getImaginary() * -1);
}

module.exports = conjugate;