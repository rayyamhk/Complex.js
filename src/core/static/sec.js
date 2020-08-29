/**
 * Calculates the secant of a Complex Number.
 * The domain of this function is C / { (k + 0.5)π : k is any integer }.<br><br>
 * 
 * If the argument is out of its domain, it returns Complex.NaN.
 * @memberof Complex
 * @static
 * @param {Complex} num - Any Complex Number which is not in the form of (k + 0.5)π
 * @returns {Complex} The result of secant function
 */
function sec(num) {
  return this.divide(
    this.ONE,
    this.cos(num),
  );
}

module.exports = sec;
