/**
 * Calculates the inverse tangent of a Complex Number.
 * The domain of this function is C / { i , -i }.<br><br>
 * 
 * If the argument is out of its domain, it returns Complex.NaN.
 * @memberof Complex
 * @static
 * @param {Complex} num - Any Complex Number except i and -i
 * @returns {Complex} The result of inverse tangent function
 */
function atan(num) {
  return this.multiply(
    new this(0, 1 / 2),
    this.subtract(
      this.log(
        this.subtract(
          this.ONE,
          this.multiply(
            new this(0, 1),
            num,
          ),
        ),
      ),
      this.log(
        this.add(
          this.ONE,
          this.multiply(
            new this(0, 1),
            num,
          ),
        ),
      ),
    ),
  );
}

module.exports = atan;
