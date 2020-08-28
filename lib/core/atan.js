"use strict";

/**
 * Calculate the inverse tangent function of given complex number
 * The domain is C / { i, -i }
 * @param { Complex } num - Complex number
 * @return { Complex } - Return the result of inverse tangent function
 */
function atan(num) {
  return this.multiply(new this(0, 1 / 2), this.subtract(this.log(this.subtract(this.ONE, this.multiply(new this(0, 1), num))), this.log(this.add(this.ONE, this.multiply(new this(0, 1), num)))));
}

module.exports = atan;