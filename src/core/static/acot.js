/** @module core/static */

/**
 * Calculates the inverse cotangent of a Complex Number.
 * The domain of this function is C / { i , -i , 0 }.
 * @static 
 * @param {Complex} num - Any Complex Number except i, -i and 0
 * @returns {Complex} The result of inverse cotangent function
 */

function acot(num) {
  return this.atan(this.inverse(num));
}

module.exports = acot;
