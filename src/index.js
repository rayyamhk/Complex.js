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

Complex.NaN = new Complex(NaN);
Complex.ONE = new Complex(1);
Complex.ZERO = new Complex(0);
Complex.PI = new Complex(Math.PI);
Complex.E = new Complex(Math.E);
Complex.EPSILON = 1 / ((10 ** 15) * 2);

module.exports = Complex;
