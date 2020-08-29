/**
 * Calculates the inverse of the Complex Number.
 * @memberof Complex
 * @static
 * @param {Complex} num - Complex Number
 * @returns {number} Inverse of the Complex Number
 */
function inverse(num) {
  if (!(num instanceof this)) {
    return this.NaN;
  }
  return this.divide(
    this.ONE,
    num,
  );
}

module.exports = inverse;
