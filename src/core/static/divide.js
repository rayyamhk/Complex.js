/** @module core/static */
 
/**
 * Calculates the quotient of two Complex Number.
 * Note that if the denominator is considered as 0,
 * returns NaN instead of Infinity.
 * @static
 * @param {Complex} num1 - The Complex Number on the left of '/' operator.
 * @param {Complex} num2 - The Complex Number on the right of '/' operator.
 * @returns {Complex} The quotient of two Complex Numbers
 */
function divide(num1, num2) {
  if (!(num1 instanceof this) || !(num2 instanceof this)) {
    return this.NaN;
  }
  const a = num1.re;
  const b = num1.im;
  const c = num2.re;
  const d = num2.im;
  if (Math.abs(c) < this.EPSILON && Math.abs(d) < this.EPSILON) {
    return this.NaN;
  }
  const denominator = c ** 2 + d ** 2;
  return new this(
    (a * c + b * d) / denominator,
    (b * c - a * d) / denominator,
  );
}

module.exports = divide;
