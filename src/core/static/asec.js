/**
 * Calculates the inverse secant of a Complex Number.
 * The domain of this function is C / { 0 }.<br><br>
 * 
 * If the argument is out of its domain, it returns Complex.NaN.
 * @memberof Complex
 * @static
 * @param {Complex} num - Any Complex Number except 0
 * @returns {Complex} The result of inverse secant function
 */
function asec(num) {
  return this.acos(this.inverse(num));
}

module.exports = asec;
