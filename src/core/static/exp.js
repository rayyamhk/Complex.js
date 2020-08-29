/** @module core/static */

/**
 * Calculates the exponential function with base E
 * @static
 * @param {Complex} num - Exponent
 * @returns {Complex} The value of E to the power of num
 */
function exp(num) {
  if (!(num instanceof this)) {
    return this.NaN;
  }
  const re = num.getReal();
  const theta = num.getImaginary();
  const r = Math.exp(re);
  return new this(
    r * Math.cos(theta),
    r * Math.sin(theta),
  );
}

module.exports = exp;
