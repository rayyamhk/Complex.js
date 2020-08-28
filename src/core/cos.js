/**
 * Calculate the cosine of given complex number
 * The domain is C
 * @param { Complex } num - Complex number
 * @return { Complex } - Return the result of complex cosine function
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
