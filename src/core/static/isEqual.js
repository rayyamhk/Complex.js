/** @module core/static */

/**
 * Determines whether two Complex Numbers are considered as identical.
 * Two Complex Numbers are considered as identical if either
 * both are NaN or both real and imaginary parts are extremely closed.
 * @static
 * @param {Complex} num1 - Complex Number
 * @param {Complex} num2 - Complex Number
 * @param {number} [digit=15] - Number of significant digits
 * @returns {boolean} Returns true if two Complex Numbers are considered as identical
 */
function isEqual(num1, num2, digit = 15) {
  if (!(num1 instanceof this) || !(num2 instanceof this)) {
    return false;
  }
  if (!Number.isInteger(digit) || digit < 0) {
    throw new Error('Invalid argument: Expected a non-negative integer digit');
  }
  const EPSILON = 1 / ((10 ** digit) * 2);

  const a = num1.getReal();
  const b = num1.getImaginary();
  const c = num2.getReal();
  const d = num2.getImaginary();
  if (Number.isNaN(a) && Number.isNaN(b) && Number.isNaN(c) && Number.isNaN(d)) {
    return true;
  }

  return Math.abs(a - c) < EPSILON && Math.abs(b - d) < EPSILON;
}

module.exports = isEqual;
