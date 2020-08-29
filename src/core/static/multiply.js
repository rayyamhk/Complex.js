/** @module core/static */
 
/**
 * Calculates the product of two Complex Number.
 * @static
 * @param {Complex} num1 - The Complex Number on the left of '*' operator.
 * @param {Complex} num2 - The Complex Number on the right of '*' operator.
 * @returns {Complex} The product of two Complex Numbers
 */
function multiply(num1, num2) {
  if (!(num1 instanceof this) || !(num2 instanceof this)) {
    return this.NaN;
  }
  const a = num1.re;
  const b = num1.im;
  const c = num2.re;
  const d = num2.im;
  return new this(
    a * c - b * d,
    a * d + b * c,
  );
}

module.exports = multiply;
