/** @module core/static */
 
/**
 * Calculates the cosine of a Complex Number.
 * @static
 * @param {Complex} num - Any Complex Number
 * @returns {Complex} The result of cosine function
 */
function cos(num) {
  if (!(num instanceof this)) {
    return this.NaN;
  }
  const a = num.getReal();
  const b = num.getImaginary();
  return new this(
    Math.cos(a) * Math.cosh(b),
    Math.sin(a) * Math.sinh(b) * -1,
  );
}

module.exports = cos;
