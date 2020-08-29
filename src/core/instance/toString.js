/** @module core/instance */

/**
 * @instance
 * @returns {string} The stringified and formatted complex number
 */
function toString() {
  const {
    re,
    im,
  } = this;
  if (Number.isNaN(re) || Number.isNaN(im)) {
    return 'NaN';
  }
  if (re === 0 && im === 0) {
    return '0';
  }
  if (re === 0) {
    if (im === 1) {
      return 'i';
    }
    if (im === -1) {
      return '-i';
    }
    return `${im}i`;
  }
  if (im === 0) {
    return `${re}`;
  }
  if (im > 0) {
    if (im === 1) {
      return `${re} + i`;
    }
    return `${re} + ${im}i`;
  }
  if (im === -1) {
    return `${re} - i`;
  }
  return `${re} - ${Math.abs(im)}i`;
}

module.exports = toString;
