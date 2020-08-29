/**
 * Calculates the inverse sine of a Complex Number.
 * @memberof Complex
 * @static
 * @param {Complex} num - Any Complex Number
 * @returns {Complex} The result of inverse sine function
 */
function asin(num) {
  return this.multiply(
    new this(0, -1),
    this.log(
      this.add(
        this.multiply(
          new this(0, 1),
          num,
        ),
        this.pow(
          this.subtract(
            this.ONE,
            this.pow(num, 2),
          ),
          0.5,
        ),
      ),
    ),
  );
}

module.exports = asin;
