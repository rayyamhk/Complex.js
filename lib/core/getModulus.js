/**
 * @return { Number } - Return the modulus (length) of given complex number
 */
function getModulus() {
  return Math.sqrt(this.re ** 2 + this.im ** 2);
}

module.exports = getModulus;
