/** @module core/static */
 
/**
 * Calculates the cosecant of a Complex Number.
 * The domain of this function is C / { kπ : k is any integer }.
 * @static
 * @param {Complex} num - Any Complex Number which is not the multiple of π
 * @returns {Complex} The result of cosecant function
 */
function csc(num) {
  return this.divide(
    this.ONE,
    this.sin(num),
  );
}

module.exports = csc;
