/**
 * Returns the quotient of two complex numbers.
 * If the denominator is considered as 0,
 * return NaN instead of Infinity
 * @param { Complex } num1 - Complex number on the left of '/' sign
 * @param { Complex } num2 - Complex number on the right of '/' sign
 * @return { Complex } - Quotient of two numbers
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
