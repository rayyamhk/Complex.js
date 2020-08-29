/** @module core/static */
 
/**
 * Calculates the cotangent of a Complex Number.
 * The domain of this function is C / { kπ/2 : k is any integer }.
 * Note that cot(π/2) should gives NaN instead of 0
 * because this library does not introduce the concept of Infinity.
 * @static
 * @param {Complex} num - Any Complex Number which is not the multiple of π/2
 * @returns {Complex} The result of cotangent function
 */
function cot(num) {
  return this.divide(
    this.ONE,
    this.tan(num),
  );
}

module.exports = cot;
