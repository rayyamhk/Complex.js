/** @module core/instance */
 
/**
 * Calculates the modulus of a Complex Number.
 * @instance
 * @returns {number} The modulus of the Complex Number
 */
function getModulus() {
  return Math.sqrt(this.re ** 2 + this.im ** 2);
}

module.exports = getModulus;
