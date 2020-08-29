/** @module core/static */

/**
 * Calculates the power of the Complex Number.
 * The exponent can be any real number.
 * If you want to calculate the k-th root,
 * you should know that it only returns one out of k solutions,
 * although there are total k possible solutions for k-th root problem.
 * @static
 * @param {Complex} num - Base
 * @param {Complex|number} n - Exponent
 * @returns {Complex} The result of the exponentiation
 */
function pow(num, n) {
  if (!(num instanceof this) || (typeof n !== 'number' && !(n instanceof this))) {
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
    return this.exp(
      this.multiply(
        new this(n, 0),
        this.log(num),
      ),
    );
  }

  if (n instanceof this) {
    return this.exp(
      this.multiply(
        n,
        this.log(num),
      ),
    );
  }

  return this.NaN;
}

module.exports = pow;
