/**
 * Determine whether the given complex number is NaN or not
 * @param { Complex } num - Complex number
 * @return { Boolean } - Return true if one of real and imaginary part are NaN
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
