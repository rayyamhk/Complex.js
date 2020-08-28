"use strict";

/**
 * Calculate the power of complex number,
 * The exponent can be any real number
 * If you want to calculate the k-th root,
 * You should know that it only returns one out of k solutions,
 * Although there are total k possible solutions for k-th root problem.
 * @param { Complex } num - Base
 * @param { Complex | Number } n - Exponent
 * @return { Complex } - Return the result of the exponentiation
 */
function pow(num, n) {
  if (!(num instanceof this) || typeof n !== 'number' && !(n instanceof this)) {
    return this.NaN;
  }

  if (typeof n === 'number') {
    if (!Number.isFinite(n) || Number.isNaN(n)) {
      return this.NaN;
    }

    if (n === 0) {
      return this.ONE;
    }

    if (this.isEqual(num, this.ZERO)) {
      return this.ZERO;
    }

    return this.exp(this.multiply(new this(n, 0), this.log(num)));
  }

  if (n instanceof this) {
    return this.exp(this.multiply(n, this.log(num)));
  }

  return this.NaN;
}

module.exports = pow;