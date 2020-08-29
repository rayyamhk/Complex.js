/**
 * Determines whether the Complex Number is NaN or not.
 * @memberof Complex
 * @static
 * @param {Complex} num - Any Complex number
 * @returns {boolean} Returns true if one of real and imaginary part are NaN
 */
function isNaN(num) {
  if (!(num instanceof this)) {
    return false;
  }
  const re = num.getReal();
  const im = num.getImaginary();

  if (Number.isNaN(re) || Number.isNaN(im)) {
    return true;
  }
  return false;
}

module.exports = isNaN;
