/**
 * Returns the product of two complex numbers
 * @param { Complex } num1 - Complex number on the left of 'x' sign
 * @param { Complex } num2 - Complex number on the right of 'x' sign
 * @return { Complex } - Product of two numbers
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
