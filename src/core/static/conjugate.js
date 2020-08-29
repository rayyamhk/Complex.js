/** @module core/static */

/**
 * Calculates the complex conjugate of the Complex Number
 * @static
 * @param {Complex} num - Complex number
 * @returns {Complex} The complex conjugate of the Complex Number
 */

function conjugate(num) {
  if (!(num instanceof this)) {
    return this.NaN;
  }
  return new this(
    num.getReal(),
    num.getImaginary() * -1,
  );
}

module.exports = conjugate;
