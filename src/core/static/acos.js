/**
 * Calculates the inverse cosine of a Complex Number.
 * @memberof Complex
 * @static
 * @param {Complex} num - Any Complex Number
 * @returns {Complex} The result of inverse cosine function
 */
function acos(num) {
  return this.subtract(
    new this(Math.PI / 2),
    this.asin(num),
  );
}

module.exports = acos;
