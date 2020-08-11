/**
 * @author Ray Yam
 * @license Copyright (c) 2020 Ray Yam.
 * 
 * This class provides basic operations for you to manipulate complex numbers
 * One important thing you should know is that
 * this class doesn't introduce the concept of INFINITY!!
 * Therefore, whenever you handle any calculations which invloves Infinity,
 * it returns NaN in general.
 * For example: tan(PI / 2) returns NaN, 1 / 0 returns NaN
 */

class Complex {
  /**
   * Returns a Complex Number
   * @param { Number } arg1 - real part of the complex number
   * @param { Number } arg2 - imaginary part of the complex number
   * @return { Complex } - Complex Number
   */
  constructor(arg1, arg2) {
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
      if (Number.isNaN(arg1) || Number.isNaN(arg2) || !Number.isFinite(arg1) || !Number.isFinite(arg2)) {
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
  };
  
  static NaN = new Complex(NaN);

  static ONE = new Complex(1);

  static ZERO = new Complex(0);

  static PI = new Complex(Math.PI);

  static E = new Complex(Math.E);

  static EPSILON = 1 / ((10 ** 15) * 2);

  /**
   * Returns the sum of two complex numbers
   * @param { Complex } num1 - Complex number on the left of '+' sign
   * @param { Complex } num2 - Complex number on the right of '+' sign
   * @return { Complex } - Sum of two numbers
   */
  static add(num1, num2) {
    if (!num1 instanceof Complex || !num2 instanceof Complex) {
      return Complex.NaN;
    }
    return new Complex(num1.re + num2.re, num1.im + num2.im);
  };

  /**
   * Returns the difference of two complex numbers
   * @param { Complex } num1 - Complex number on the left of '-' sign
   * @param { Complex } num2 - Complex number on the right of '-' sign
   * @return { Complex } - Difference of two numbers
   */
  static subtract(num1, num2) {
    if (!num1 instanceof Complex || !num2 instanceof Complex) {
      return Complex.NaN;
    }
    return new Complex(num1.re - num2.re, num1.im - num2.im);
  };

  /**
   * Returns the product of two complex numbers
   * @param { Complex } num1 - Complex number on the left of 'x' sign
   * @param { Complex } num2 - Complex number on the right of 'x' sign
   * @return { Complex } - Product of two numbers
   */
  static multiply(num1, num2) {
    if (!num1 instanceof Complex || !num2 instanceof Complex) {
      return Complex.NaN;
    }
    const a = num1.re,
          b = num1.im,
          c = num2.re,
          d = num2.im;
    return new Complex(
      a * c - b * d,
      a * d + b * c
    );
  };

  /**
   * Returns the quotient of two complex numbers.
   * If the denominator is considered as 0,
   * return NaN instead of Infinity
   * @param { Complex } num1 - Complex number on the left of '/' sign
   * @param { Complex } num2 - Complex number on the right of '/' sign
   * @return { Complex } - Quotient of two numbers
   */
  static divide(num1, num2) {
    if (!num1 instanceof Complex || !num2 instanceof Complex) {
      return Complex.NaN;
    }
    const a = num1.re,
          b = num1.im,
          c = num2.re,
          d = num2.im;
    if (Math.abs(c) < this.EPSILON && Math.abs(d) < this.EPSILON) {
      return Complex.NaN;
    }
    const denominator = c ** 2 + d ** 2;
    return new Complex(
      (a * c + b * d) / denominator,
      (b * c - a * d) / denominator
    );
  };

  /**
   * Determine whether two complex numbers are considered as identical.
   * Either both are NaN or both real and imaginary parts are extremely closed.
   * @param { Complex } num1 - Complex number
   * @param { Complex } num2 - Complex number
   * @param { Integer } [ digit = 15 ] - Number of significant digits
   * @return { Boolean } - Return true if two complex numbers are considered as identical
   */
  static isEqual(num1, num2, digit = 15) {
    if (!num1 instanceof Complex || !num2 instanceof Complex) {
      return false;
    }
    if (!Number.isInteger(digit) || digit < 0) {
      throw new Error('Invalid argument: Expected a non-negative integer digit');
    }
    const EPSILON = 1 / ((10 ** digit) * 2);

    const a = num1.getReal(),
          b = num1.getImaginary(),
          c = num2.getReal(),
          d = num2.getImaginary();
    if (Number.isNaN(a) && Number.isNaN(b) && Number.isNaN(c) && Number.isNaN(d)) {
      return true;
    }

    return Math.abs(a - c) < EPSILON && Math.abs(b - d) < EPSILON;
  };

  /**
   * Determine whether the given complex number is NaN or not
   * @param { Complex } num - Complex number
   * @return { Boolean } - Return true if one of real and imaginary part are NaN
   */
  static isNaN(num) {
    if (!num instanceof Complex) {
      return false;
    }
    const re = num.getReal();
    const im = num.getImaginary();

    if (Number.isNaN(re) || Number.isNaN(im)) {
      return true;
    }
    return false;
  };

  /**
   * Calculate the power of complex number,
   * The exponent can be any real number
   * If you want to calculate the k-th root,
   * You should know that it only returns one out of k solutions,
   * Although there are total k possible solutions for k-th root problem.
   * @param { Complex } num - Base
   * @param { Complex | Number } n - Exponent
   * @return { Complex } - Return the result of the exponentiation
   */
  static pow(num, n) {
    if (!num instanceof Complex || (typeof n !== 'number' && !n instanceof Complex)) {
      return Complex.NaN;
    }

    if (typeof n === 'number') {
      if (!Number.isFinite(n) || Number.isNaN(n)) {
        return Complex.NaN;
      }
      if (n === 0) {
        return Complex.ONE;
      }
      if (this.isEqual(num, Complex.ZERO)) {
        return Complex.ZERO;
      }
      return this.exp(
        this.multiply(
          new Complex(n, 0),
          this.log(num)
        )
      );
    }

    if (n instanceof Complex) {
      return this.exp(
        this.multiply(
          n,
          this.log(num)
        )
      );
    }

    return Complex.NaN;
  };

  /**
   * Calculate the complex conjugate of given complex number
   * @param { Complex } num - Complex number
   * @return { Complex } - Return the complex conjugate
   */
  static conjugate(num) {
    if (!num instanceof Complex) {
      return Complex.NaN;
    }
    return new Complex(
      num.getReal(),
      num.getImaginary() * -1
    );
  };

  /**
   * Calculate the inverse of given complex number, i.e. 1/z
   * @param { Complex } num - Complex number
   * @return { Complex } - Return the inverse
   */
  static inverse(num) {
    if (!num instanceof Complex) {
      return Complex.NaN;
    }
    return this.divide(
      this.ONE,
      num
    );
  };

  /**
   * Calculate the exponential function with base E
   * @param { Complex } num - Exponent
   * @return { Complex } - Return the e to the power of num
   */
  static exp(num) {
    if (!num instanceof Complex) {
      return Complex.NaN;
    }
    let re = num.getReal();
    let theta = num.getImaginary();
    let r = Math.exp(re);
    return new Complex(
      r * Math.cos(theta),
      r * Math.sin(theta)
    );
  };

  /**
   * Calculate the natural log of given complex number
   * Note that complex log is a multivalued function,
   * But this function only provides the principal value by
   * restricting the imaginary part to the interval [0, 2 * Pi).
   * @param { Complex } num - Complex number
   * @return { Complex } - Return the result after taking natural log
   */
  static log(num) {
    if (!num instanceof Complex) {
      return Complex.NaN;
    }
    const r = num.getModulus();
    const theta = num.getArgument();

    if (r < this.EPSILON || theta === undefined) {
      return Complex.NaN;
    }

    return new Complex(
      Math.log(r),
      theta
    );
  };

  /**
   * Calculate the sine of given complex number
   * The domain is C
   * @param { Complex } num - Complex number
   * @return { Complex } - Return the result of complex sine function
   */
  static sin(num) {
    if (!num instanceof Complex) {
      return Complex.NaN;
    }
    const a = num.getReal();
    const b = num.getImaginary();
    return new Complex(
      Math.sin(a) * Math.cosh(b),
      Math.cos(a) * Math.sinh(b)
    );
  };

  /**
   * Calculate the cosine of given complex number
   * The domain is C
   * @param { Complex } num - Complex number
   * @return { Complex } - Return the result of complex cosine function
   */
  static cos(num) {
    if (!num instanceof Complex) {
      return Complex.NaN;
    }
    const a = num.getReal();
    const b = num.getImaginary();
    return new Complex(
      Math.cos(a) * Math.cosh(b),
      Math.sin(a) * Math.sinh(b) * -1
    );
  };

  /**
   * Calculate the tangent of given complex number
   * The domain is C / { ( 2k + 1) * PI / 2 : k is any integer }
   * @param { Complex } num - Complex number
   * @return { Complex } - Return the result of complex tangent function
   */
  static tan(num) {
    return this.divide(
      this.sin(num),
      this.cos(num)
    );
  };

  /**
   * Calculate the secant of given complex number
   * The domain is C / { ( 2k + 1) * PI / 2 : k is any integer }
   * @param { Complex } num - Complex number
   * @return { Complex } - Return the result of complex secant function
   */
  static sec(num) {
    return this.divide(
      this.ONE,
      this.cos(num)
    );
  };

   /**
   * Calculate the cosecant of given complex number
   * The domain is C / { k * PI : k is any integer }
   * @param { Complex } num - Complex number
   * @return { Complex } - Return the result of complex cosecant function
   */
  static csc(num) {
    return this.divide(
      this.ONE,
      this.sin(num)
    );
  };

   /**
   * Calculate the cotangent of given complex number
   * The domain is C / { k * PI : k is any integer }
   * Note that cot(PI / 2) should gives NaN instead of 0
   * because we won't introduce the concept of Infinity in this class
   * @param { Complex } num - Complex number
   * @return { Complex } - Return the result of complex cotangent function
   */
  static cot(num) {
    return this.divide(
      this.ONE,
      this.tan(num)
    );
  };

  /**
   * Calculate the inverse sine function of given complex number
   * The domain is C 
   * @param { Complex } num - Complex number
   * @return { Complex } - Return the result of inverse sine function
   */
  static asin(num) {
    return this.multiply(
      new Complex(0, -1),
      this.log(
        this.add(
          this.multiply(
            new Complex(0, 1),
            num
          ),
          this.pow(
            this.subtract(
              this.ONE,
              this.pow(num, 2)
            ),
            0.5
          )
        )
      )
    );
  };

  /**
   * Calculate the inverse cosine function of given complex number
   * The domain is C 
   * @param { Complex } num - Complex number
   * @return { Complex } - Return the result of inverse sine function
   */
  static acos(num) {
    return this.subtract(
      new Complex(Math.PI / 2),
      this.asin(num)
    );
  };

  /**
   * Calculate the inverse tangent function of given complex number
   * The domain is C / { i, -i }
   * @param { Complex } num - Complex number
   * @return { Complex } - Return the result of inverse tangent function
   */
  static atan(num) {
    return this.multiply(
      new Complex(0, 1 / 2),
      this.subtract(
        this.log(
          this.subtract(
            this.ONE,
            this.multiply(
              new Complex(0, 1),
              num
            )
          )
        ),
        this.log(
          this.add(
            this.ONE,
            this.multiply(
              new Complex(0, 1),
              num
            )
          )
        )
      )
    );
  };

  /**
   * Calculate the inverse cosecant function of given complex number
   * The domain is C / { 0 }
   * @param { Complex } num - Complex number
   * @return { Complex } - Return the result of inverse cosecant function
   */
  static acsc(num) {
    return this.asin(this.inverse(num));
  };

   /**
   * Calculate the inverse secant function of given complex number
   * The domain is C / { 0 }
   * @param { Complex } num - Complex number
   * @return { Complex } - Return the result of inverse secant function
   */
  static asec(num) {
    return this.acos(this.inverse(num));
  };

   /**
   * Calculate the inverse cotangent function of given complex number
   * The domain is C / { i, -i, 0 }
   * @param { Complex } num - Complex number
   * @return { Complex } - Return the result of inverse cotangent function
   */
  static acot(num) {
    return this.atan(this.inverse(num));
  };

   /**
   * @return { Number } - Return the real part of given complex number
   */
  getReal() {
    return this.re;
  };

  /**
   * @return { Number } - Return the imaginary part of given complex number
   */
  getImaginary() {
    return this.im;
  };

  /**
   * @return { Number } - Return the modulus (length) of given complex number
   */
  getModulus() {
    return Math.sqrt( this.re ** 2 + this.im ** 2 );
  };

  /**
   * Note that the argument is restricted to the interval [ 0, 2 * PI )
   * If the given number is considered as 0, return undefined
   * @return { Number } - Return the argument of given complex number
   */
  getArgument() {
    const x = this.re;
    const y = this.im;
    if (Math.abs(x) < this.EPSILON && Math.abs(y) < this.EPSILON) {
      return undefined;
    }
    if (x === 0) {
      if (y > 0) {
        return Math.PI * .5;
      }
      return Math.PI * 1.5;
    }
    if (y === 0) {
      if (x > 0) {
        return 0;
      }
      return Math.PI;
    }
    if (x > 0 && y > 0) {
      return Math.atan(y / x);
    }
    if (x < 0 && y > 0) {
      return Math.PI - Math.atan(y / (x * -1));
    }
    if (x < 0 && y < 0) {
      return Math.PI + Math.atan((y * -1) / (x * -1));
    }
    return Math.PI * 2 - Math.atan((y * -1) / x);
  };

  /** 
   * @return { String } - Return the stringified and formatted complex number
   */
  toString() {
    const re = this.re;
    const im = this.im;
    if (Number.isNaN(re) || Number.isNaN(im)) {
      return 'NaN';
    }
    if (re === 0 && im === 0) {
      return '0';
    }
    if (re === 0) {
      if (im === 1) {
        return 'i';
      }
      if (im === -1) {
        return '-i';
      }
      return `${im}i`;
    }
    if (im === 0) {
      return `${re}`;
    }
    if (im > 0) {
      if (im === 1) {
        return `${re} + i`;
      }
      return `${re} + ${im}i`;
    }
    if (im === -1) {
      return `${re} - i`;
    }
    return `${re} - ${Math.abs(im)}i`;
  };
};

module.exports = Complex;
