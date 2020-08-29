/** @module core/static */
 
/**
 * Calculates the natural log of the Complex Number.
 * Note that complex log is a multivalued function,
 * and this function only provides the principal value by
 * restricting the imaginary part to the interval [0, 2π).
 * @static
 * @param {Complex} num - Complex Number
 * @returns {number} Natural log of the Complex Number
 */
function log(num) {
  if (!(num instanceof this)) {
    return this.NaN;
  }
  const r = num.getModulus();
  const theta = num.getArgument();

  if (r < this.EPSILON || theta === undefined) {
    return this.NaN;
  }

  return new this(
    Math.log(r),
    theta,
  );
}

module.exports = log;
