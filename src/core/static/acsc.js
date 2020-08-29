/** @module core/static */

/**
 * Calculates the inverse cosecant of a Complex Number.
 * The domain of this function is C / { 0 }.
 * @static 
 * @param {Complex} num - Any Complex Number except 0
 * @returns {Complex} The result of inverse cosecant function
 */

function acsc(num) {
  return this.asin(this.inverse(num));
}

module.exports = acsc;
