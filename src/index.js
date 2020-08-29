/**
 * Creates a new Complex Number
 * @class
 * @param {number} arg1 - The real part of the Complex Number
 * @param {number} arg2 - The imaginary part of the Complex Number
 */
function Complex(arg1, arg2) {
  const type1 = typeof arg1;
  const type2 = typeof arg2;
  if (type1 === 'number' && type2 === 'undefined') {
    if (Number.isNaN(arg1) || !Number.isFinite(arg1)) {
      this.re = NaN;
      this.im = NaN;
      return this;
    }
    this.re = arg1;
    this.im = 0;
    return this;
  }
  if (type1 === 'number' && type2 === 'number') {
    if (
      Number.isNaN(arg1)
      || Number.isNaN(arg2)
      || !Number.isFinite(arg1)
      || !Number.isFinite(arg2)
    ) {
      this.re = NaN;
      this.im = NaN;
      return this;
    }
    this.re = arg1;
    this.im = arg2;
    return this;
  }
  this.re = NaN;
  this.im = NaN;
  return this;
}

Complex.prototype.getReal = require('./core/instance/getReal');
Complex.prototype.getImaginary = require('./core/instance/getImaginary');
Complex.prototype.getModulus = require('./core/instance/getModulus');
Complex.prototype.getArgument = require('./core/instance/getArgument');
Complex.prototype.toString = require('./core/instance/toString');

Complex.isNaN = require('./core/static/isNaN');
Complex.isEqual = require('./core/static/isEqual');
Complex.conjugate = require('./core/static/conjugate');
Complex.inverse = require('./core/static/inverse');
Complex.add = require('./core/static/add');
Complex.subtract = require('./core/static/subtract');
Complex.multiply = require('./core/static/multiply');
Complex.divide = require('./core/static/divide');
Complex.exp = require('./core/static/exp');
Complex.log = require('./core/static/log');
Complex.pow = require('./core/static/pow');
Complex.sin = require('./core/static/sin');
Complex.cos = require('./core/static/cos');
Complex.tan = require('./core/static/tan');
Complex.csc = require('./core/static/csc');
Complex.sec = require('./core/static/sec');
Complex.cot = require('./core/static/cot');
Complex.asin = require('./core/static/asin');
Complex.acos = require('./core/static/acos');
Complex.atan = require('./core/static/atan');
Complex.acsc = require('./core/static/acsc');
Complex.asec = require('./core/static/asec');
Complex.acot = require('./core/static/acot');

/**
 * It represents NaN in this library. It is equivalent to new Complex(NaN).
 * It is important to know that this library does not introduce the concept of Complex Infinity,
 * all Infinity in this library are represented by Complex.NaN.
 * @static
 */
Complex.NaN = new Complex(NaN);

/**
 * @static
 */
Complex.ONE = new Complex(1);

/**
 * @static
 */
Complex.ZERO = new Complex(0);

/**
 * @static
 */
Complex.PI = new Complex(Math.PI);

/**
 * @static
 */
Complex.E = new Complex(Math.E);

/**
 * It represents the value of 5e-16, which is the smallest number considered as non-zero in this library.
 * In the other words, any number less than Complex.EPSILON is considered as 0.
 * Note that Complex.EPSILON is number instead of instance of Complex.
 * @static
 */
Complex.EPSILON = 1 / ((10 ** 15) * 2);

module.exports = Complex;
