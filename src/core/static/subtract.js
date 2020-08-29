/**
 * Calculates the difference of two Complex Number.
 * @memberof Complex
 * @static
 * @param {Complex} num1 - The Complex Number on the left of '-' operator.
 * @param {Complex} num2 - The Complex Number on the right of '-' operator.
 * @returns {Complex} The difference of two Complex Numbers
 */
function subtract(num1, num2) {
  if (!(num1 instanceof this) || !(num2 instanceof this)) {
    return this.NaN;
  }
  return new this(num1.re - num2.re, num1.im - num2.im);
}

module.exports = subtract;
