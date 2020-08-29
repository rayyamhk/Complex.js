/** @module core/static */
 
/**
 * Calculates the sine of a Complex Number.
 * @static
 * @param {Complex} num - Any Complex Number
 * @returns {Complex} The result of sine function
 */
function sin(num) {
  if (!(num instanceof this)) {
    return this.NaN;
  }
  const a = num.getReal();
  const b = num.getImaginary();
  return new this(
    Math.sin(a) * Math.cosh(b),
    Math.cos(a) * Math.sinh(b),
  );
}

module.exports = sin;
