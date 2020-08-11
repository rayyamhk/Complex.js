/* eslint-disable jest/no-conditional-expect */
const Complex = require('../index');

function getRandom(min = 0, max = 1, toFixed = 0) {
  return new Complex(
    Number.parseFloat((Math.random() * (max - min) + min).toFixed(toFixed)),
    Number.parseFloat((Math.random() * (max - min) + min).toFixed(toFixed)),
  );
}

describe('constructor', () => {
  it('0 arg', () => {
    expect.hasAssertions();
    const number = new Complex();
    expect(Number.isNaN(number.re)).toBe(true);
    expect(Number.isNaN(number.im)).toBe(true);
  });

  describe('1 argument', () => {
    it('1 int', () => {
      expect.hasAssertions();
      const number = new Complex(10);
      expect(number.re).toBe(10);
      expect(number.im).toBe(0);
    });
    it('1 float', () => {
      expect.hasAssertions();
      const number = new Complex(Math.PI);
      expect(number.re).toBe(Math.PI);
      expect(number.im).toBe(0);
    });
    it('1 inf', () => {
      expect.hasAssertions();
      const number = new Complex(Infinity);
      expect(Number.isNaN(number.re)).toBe(true);
      expect(Number.isNaN(number.re)).toBe(true);
    });
    it('1 NaN', () => {
      expect.hasAssertions();
      const number = new Complex(NaN);
      expect(Number.isNaN(number.re)).toBe(true);
      expect(Number.isNaN(number.re)).toBe(true);
    });
  });

  describe('2 arguments', () => {
    it('2 ints', () => {
      expect.hasAssertions();
      const number = new Complex(1, 2);
      expect(number.re).toBe(1);
      expect(number.im).toBe(2);
    });
    it('1 int 1 float', () => {
      expect.hasAssertions();
      const number = new Complex(1, 3.1415926);
      expect(number.re).toBe(1);
      expect(number.im).toBe(3.1415926);
    });
    it('1 float 1 int', () => {
      expect.hasAssertions();
      const number = new Complex(3.1415926, 1);
      expect(number.re).toBe(3.1415926);
      expect(number.im).toBe(1);
    });
    it('2 floats', () => {
      expect.hasAssertions();
      const number = new Complex(1.234, -4.321);
      expect(number.re).toBe(1.234);
      expect(number.im).toBe(-4.321);
    });
    it('1 inf 1 finite', () => {
      expect.hasAssertions();
      const number = new Complex(Infinity, Math.PI);
      expect(Number.isNaN(number.re)).toBe(true);
      expect(Number.isNaN(number.re)).toBe(true);
    });
    it('1 finite 1 inf', () => {
      expect.hasAssertions();
      const number = new Complex(Math.PI, Infinity);
      expect(Number.isNaN(number.re)).toBe(true);
      expect(Number.isNaN(number.re)).toBe(true);
    });
    it('2 infs', () => {
      expect.hasAssertions();
      const number = new Complex(Infinity, Infinity);
      expect(Number.isNaN(number.re)).toBe(true);
      expect(Number.isNaN(number.re)).toBe(true);
    });
    it('1 NaN 1 num', () => {
      expect.hasAssertions();
      const number = new Complex(NaN, Math.PI);
      expect(Number.isNaN(number.re)).toBe(true);
      expect(Number.isNaN(number.im)).toBe(true);
    });
    it('1 num 1 NaN', () => {
      expect.hasAssertions();
      const number = new Complex(Math.PI, NaN);
      expect(Number.isNaN(number.re)).toBe(true);
      expect(Number.isNaN(number.im)).toBe(true);
    });
    it('2 NaNs', () => {
      expect.hasAssertions();
      const number = new Complex(NaN, NaN);
      expect(Number.isNaN(number.re)).toBe(true);
      expect(Number.isNaN(number.im)).toBe(true);
    });
  });

  describe('invalid argument(s)', () => {
    it('string 1', () => {
      expect.hasAssertions();
      const number = new Complex('');
      expect(Number.isNaN(number.re)).toBe(true);
      expect(Number.isNaN(number.im)).toBe(true);
    });
    it('string 2', () => {
      expect.hasAssertions();
      const number = new Complex('   ');
      expect(Number.isNaN(number.re)).toBe(true);
      expect(Number.isNaN(number.im)).toBe(true);
    });
    it('string 3', () => {
      expect.hasAssertions();
      const number = new Complex('abc');
      expect(Number.isNaN(number.re)).toBe(true);
      expect(Number.isNaN(number.im)).toBe(true);
    });
    it('string 4', () => {
      expect.hasAssertions();
      const number = new Complex('3 + 4i');
      expect(Number.isNaN(number.re)).toBe(true);
      expect(Number.isNaN(number.im)).toBe(true);
    });
    it('string 5', () => {
      expect.hasAssertions();
      const number = new Complex('1.234');
      expect(Number.isNaN(number.re)).toBe(true);
      expect(Number.isNaN(number.im)).toBe(true);
    });
    it('array', () => {
      expect.hasAssertions();
      const number = new Complex([]);
      expect(Number.isNaN(number.re)).toBe(true);
      expect(Number.isNaN(number.im)).toBe(true);
    });
    it('object', () => {
      expect.hasAssertions();
      const number = new Complex({});
      expect(Number.isNaN(number.re)).toBe(true);
      expect(Number.isNaN(number.im)).toBe(true);
    });
    it('regex', () => {
      expect.hasAssertions();
      const number = new Complex(/^test$/);
      expect(Number.isNaN(number.re)).toBe(true);
      expect(Number.isNaN(number.im)).toBe(true);
    });
    it('function', () => {
      expect.hasAssertions();
      const number = new Complex(() => {});
      expect(Number.isNaN(number.re)).toBe(true);
      expect(Number.isNaN(number.im)).toBe(true);
    });
    it('instance', () => {
      expect.hasAssertions();
      const number = new Complex(new Complex());
      expect(Number.isNaN(number.re)).toBe(true);
      expect(Number.isNaN(number.im)).toBe(true);
    });
    it('date', () => {
      expect.hasAssertions();
      const number = new Complex(new Date());
      expect(Number.isNaN(number.re)).toBe(true);
      expect(Number.isNaN(number.im)).toBe(true);
    });
    it('null', () => {
      expect.hasAssertions();
      const number = new Complex(null);
      expect(Number.isNaN(number.re)).toBe(true);
      expect(Number.isNaN(number.im)).toBe(true);
    });
    it('undefined', () => {
      expect.hasAssertions();
      const number = new Complex(undefined);
      expect(Number.isNaN(number.re)).toBe(true);
      expect(Number.isNaN(number.im)).toBe(true);
    });
  });
});

describe('methods', () => {
  const samples = [
    {
      num: new Complex(0),
      re: 0,
      im: 0,
      module: 0,
      arg: undefined,
    },
    {
      num: new Complex(10, 0),
      re: 10,
      im: 0,
      module: 10,
      arg: 0,
    },
    {
      num: new Complex(0, 10),
      re: 0,
      im: 10,
      module: 10,
      arg: Math.PI / 2,
    },
    {
      num: new Complex(-10, 0),
      re: -10,
      im: 0,
      module: 10,
      arg: Math.PI,
    },
    {
      num: new Complex(0, -10),
      re: 0,
      im: -10,
      module: 10,
      arg: (Math.PI * 3) / 2,
    },
    {
      num: new Complex(3, 4),
      re: 3,
      im: 4,
      module: 5,
      arg: 0.927295218,
    },
    {
      num: new Complex(-3, 4),
      re: -3,
      im: 4,
      module: 5,
      arg: 2.214297436,
    },
    {
      num: new Complex(-3, -4),
      re: -3,
      im: -4,
      module: 5,
      arg: 4.068887872,
    },
    {
      num: new Complex(3, -4),
      re: 3,
      im: -4,
      module: 5,
      arg: 5.355890089,
    },
  ];

  samples.forEach((sample, idx) => {
    it(`test ${idx + 1}`, () => {
      expect.hasAssertions();
      const {
        num,
        re,
        im,
        module,
        arg,
      } = sample;
      const expectedReal = num.getReal();
      const expectedImaginary = num.getImaginary();
      const expectedModule = num.getModulus();
      const expectedArg = num.getArgument();
      expect(expectedReal).toBe(re);
      expect(expectedImaginary).toBe(im);
      expect(expectedModule).toBe(module);
      if (arg === undefined) {
        expect(expectedArg).toBeUndefined();
      } else {
        expect(expectedArg).toBeCloseTo(arg);
      }
    });
  });
});

describe('equal', () => {
  describe('should be true', () => {
    it('should complex number equals to itself', () => {
      expect.hasAssertions();
      const num = new Complex(3, 4);
      expect(Complex.isEqual(num, num)).toBe(true);
    });

    it('should ignore extremely small difference', () => {
      expect.hasAssertions();
      const num1 = new Complex(3, 3.99999999);
      const num2 = new Complex(3.000000001, 4);
      expect(Complex.isEqual(num1, num2, 2)).toBe(true);
    });

    it('should NaN equals NaN', () => {
      expect.hasAssertions();
      const num = Complex.NaN;
      expect(Complex.isEqual(num, num)).toBe(true);
    });
  });

  describe('should be false', () => {
    it('should NaN not equals to non-NaN 1', () => {
      expect.hasAssertions();
      const num1 = new Complex(3, 4);
      const num2 = Complex.NaN;
      expect(Complex.isEqual(num1, num2)).toBe(false);
    });

    it('should NaN not equals to non-NaN 2', () => {
      expect.hasAssertions();
      const num1 = new Complex(3, 4);
      const num2 = new Complex(3, NaN);
      expect(Complex.isEqual(num1, num2)).toBe(false);
    });

    it('should different numbers return false', () => {
      expect.hasAssertions();
      const num1 = new Complex(3, 4);
      const num2 = new Complex(4, 3);
      expect(Complex.isEqual(num1, num2)).toBe(false);
    });

    it('should not large difference', () => {
      expect.hasAssertions();
      const num1 = new Complex(3, 3.9);
      const num2 = new Complex(3.1, 4);
      expect(Complex.isEqual(num1, num2)).toBe(false);
    });
  });
});

describe('isNaN', () => {
  describe('should be true', () => {
    it('true 1', () => {
      expect.hasAssertions();
      expect(Complex.isNaN(Complex.NaN)).toBe(true);
    });

    it('true 2', () => {
      expect.hasAssertions();
      expect(Complex.isNaN(new Complex())).toBe(true);
    });

    it('true 3', () => {
      expect.hasAssertions();
      expect(Complex.isNaN(new Complex(NaN))).toBe(true);
    });
  });

  describe('should be false', () => {
    it('false 1', () => {
      expect.hasAssertions();
      expect(Complex.isNaN(Complex.ONE)).toBe(false);
    });

    it('false 2', () => {
      expect.hasAssertions();
      expect(Complex.isNaN(new Complex(3))).toBe(false);
    });

    it('false 3', () => {
      expect.hasAssertions();
      expect(Complex.isNaN(new Complex(1.234, 4.321))).toBe(false);
    });
  });
});

describe('4 operations', () => {
  const samples = [
    {
      num1: new Complex(1),
      num2: new Complex(3.1415926),
      sum: new Complex(4.1415926),
      diff: new Complex(-2.1415926),
      product: new Complex(3.1415926),
      quotient: new Complex(1 / 3.1415926),
    },
    {
      num1: new Complex(1, 0),
      num2: new Complex(2, 0),
      sum: new Complex(3, 0),
      diff: new Complex(-1, 0),
      product: new Complex(2, 0),
      quotient: new Complex(1 / 2, 0),
    },
    {
      num1: new Complex(-1, 0),
      num2: new Complex(1, 0),
      sum: new Complex(0, 0),
      diff: new Complex(-2, 0),
      product: new Complex(-1, 0),
      quotient: new Complex(-1, 0),
    },
    {
      num1: new Complex(0, 1),
      num2: new Complex(0, 3.14),
      sum: new Complex(0, 4.14),
      diff: new Complex(0, -2.14),
      product: new Complex(-3.14, 0),
      quotient: new Complex(1 / 3.14, 0),
    },
    {
      num1: new Complex(0, 3.14),
      num2: new Complex(3.14, 0),
      sum: new Complex(3.14, 3.14),
      diff: new Complex(-3.14, 3.14),
      product: new Complex(0, 9.8596),
      quotient: new Complex(0, 1),
    },
    {
      num1: new Complex(3, 4),
      num2: new Complex(2, 7),
      sum: new Complex(5, 11),
      diff: new Complex(1, -3),
      product: new Complex(-22, 29),
      quotient: new Complex(34 / 53, -13 / 53),
    },
    {
      num1: new Complex(3, 4),
      num2: Complex.ZERO,
      sum: new Complex(3, 4),
      diff: new Complex(3, 4),
      product: Complex.ZERO,
      quotient: Complex.NaN,
    },
    {
      num1: Complex.ZERO,
      num2: new Complex(3, 4),
      sum: new Complex(3, 4),
      diff: new Complex(-3, -4),
      product: Complex.ZERO,
      quotient: Complex.ZERO,
    },
    {
      num1: Complex.ONE,
      num2: new Complex(3, 4),
      sum: new Complex(4, 4),
      diff: new Complex(-2, -4),
      product: new Complex(3, 4),
      quotient: new Complex(3 / 25, -4 / 25),
    },
    {
      num1: Complex.NaN,
      num2: Complex.ONE,
      sum: Complex.NaN,
      diff: Complex.NaN,
      product: Complex.NaN,
      quotient: Complex.NaN,
    },
  ];

  samples.forEach((sample, idx) => {
    it(`test ${idx + 1}`, () => {
      expect.hasAssertions();
      const {
        num1,
        num2,
        sum,
        diff,
        product,
        quotient,
      } = sample;
      const receivedSum = Complex.add(num1, num2);
      const receivedDiff = Complex.subtract(num1, num2);
      const receivedProduct = Complex.multiply(num1, num2);
      const receivedQuotient = Complex.divide(num1, num2);
      expect(Complex.isEqual(receivedSum, sum, 2)).toBe(true);
      expect(Complex.isEqual(receivedDiff, diff, 2)).toBe(true);
      expect(Complex.isEqual(receivedProduct, product, 2)).toBe(true);
      expect(Complex.isEqual(receivedQuotient, quotient, 2)).toBe(true);
    });
  });
});

describe('pow', () => {
  const samples = [
    {
      num: Complex.ONE,
      n: 10,
      result: Complex.ONE,
    },
    {
      num: Complex.ZERO,
      n: 10,
      result: Complex.ZERO,
    },
    {
      num: Complex.ONE,
      n: 0,
      result: Complex.ONE,
    },
    {
      num: Complex.ZERO,
      n: 0,
      result: Complex.ONE,
    },
    {
      num: Complex.ZERO,
      n: 0,
      result: Complex.ONE,
    },
    {
      num: new Complex(2),
      n: 10,
      result: new Complex(2 ** 10),
    },
    {
      num: new Complex(3, 4),
      n: 10,
      result: new Complex(-9653287, 1476984),
    },
    {
      num: new Complex(3, 4),
      n: -5,
      result: new Complex(-237 / 9765625, 3116 / 9765625),
    },
    {
      num: new Complex(3, 4),
      n: -5,
      result: new Complex(-237 / 9765625, 3116 / 9765625),
    },
    {
      num: new Complex(3, 4),
      n: 1 / 2,
      result: new Complex(2, 1),
    },
    {
      num: new Complex(3, 4),
      n: 1 / 3,
      result: new Complex(1.628937145922176, 0.52017450230454584),
    },
    {
      num: new Complex(3, 4),
      n: 1 / 4,
      result: new Complex(1.455346690225, 0.34356074972),
    },
    {
      num: new Complex(3, 4),
      n: 1 / 5,
      result: new Complex(1.356069653781815374, 0.254419010311623283482),
    },
    {
      num: new Complex(3, 4),
      n: 1 / 11,
      result: new Complex(1.15344730250367, 0.09746609384727),
    },
    {
      num: new Complex(3, 4),
      n: 1.2,
      result: new Complex(3.05053, 6.18754),
    },
    {
      num: new Complex(3, 4),
      n: 1.234,
      result: new Complex(3.01449, 6.63388),
    },
    {
      num: new Complex(3, 4),
      n: -1.234,
      result: new Complex(0.0567749, -0.124942),
    },
    {
      num: new Complex(0, 1),
      n: 1.2,
      result: new Complex(-0.309017, 0.951057),
    },
    {
      num: new Complex(2, 0),
      n: Math.PI,
      result: new Complex(2 ** Math.PI, 0),
    },
    {
      num: new Complex(3, 45),
      n: 0,
      result: Complex.ONE,
    },
    {
      num: new Complex(-45, 54),
      n: 1,
      result: new Complex(-45, 54),
    },
    {
      num: Complex.ZERO,
      n: Math.PI,
      result: Complex.ZERO,
    },
    {
      num: Complex.ZERO,
      n: 0,
      result: Complex.ONE,
    },
    {
      num: Complex.NaN,
      n: 7,
      result: Complex.NaN,
    },
    {
      num: new Complex(3, 4),
      n: new Complex(3, 4),
      result: new Complex(-2.997990598421, 0.62378458627904401),
    },
    {
      num: new Complex(3, 4),
      n: new Complex(3),
      result: new Complex(-117, 44),
    },
    {
      num: new Complex(3, 4),
      n: new Complex(0, 1.234),
      result: new Complex(-0.12847, 0.291389),
    },
    {
      num: new Complex(3.1415926),
      n: new Complex(2.71828),
      result: new Complex(3.1415926 ** 2.71828),
    },
    {
      num: new Complex(3.1415926),
      n: new Complex(0, 2.71828),
      result: new Complex(-0.999553, 0.0298919),
    },
    {
      num: new Complex(3.1415926),
      n: new Complex(1.414, 2.71828),
      result: new Complex(-5.04401, 0.150842),
    },
  ];

  samples.forEach((sample, idx) => {
    it(`test ${idx + 1}`, () => {
      expect.hasAssertions();
      const {
        num,
        n,
        result,
      } = sample;
      const pow = Complex.pow(num, n);
      expect(Complex.isEqual(result, pow, 2)).toBe(true);
    });
  });
});

describe('conjugate', () => {
  const samples = [
    {
      num: new Complex(3, 4),
      conjugate: new Complex(3, -4),
    },
    {
      num: new Complex(3),
      conjugate: new Complex(3),
    },
    {
      num: new Complex(0, 4),
      conjugate: new Complex(0, -4),
    },
    {
      num: new Complex(3, -4),
      conjugate: new Complex(3, 4),
    },
    {
      num: new Complex(-3, 4),
      conjugate: new Complex(-3, -4),
    },
    {
      num: new Complex(-3, -4),
      conjugate: new Complex(-3, 4),
    },
  ];

  samples.forEach((sample, idx) => {
    it(`test ${idx + 1}`, () => {
      expect.hasAssertions();
      const {
        num,
        conjugate,
      } = sample;
      const result = Complex.conjugate(num);
      expect(Complex.isEqual(conjugate, result, 2)).toBe(true);
    });
  });
});

describe('inverse', () => {
  const samples = [
    {
      num: new Complex(3, 4),
      inv: new Complex(3 / 25, -4 / 25),
    },
    {
      num: new Complex(3),
      inv: new Complex(1 / 3),
    },
    {
      num: new Complex(0, 1),
      inv: new Complex(0, -1),
    },
  ];

  samples.forEach((sample, idx) => {
    it(`test ${idx + 1}`, () => {
      expect.hasAssertions();
      const { num, inv } = sample;
      const result = Complex.inverse(num);
      expect(Complex.isEqual(result, inv, 2)).toBe(true);
    });
  });
});

describe('exp', () => {
  const samples = [
    {
      n: new Complex(3, 4),
      result: new Complex(-13.12878308146, -15.200784463068),
    },
    {
      n: new Complex(3),
      result: new Complex(20.085536923187667741),
    },
    {
      n: new Complex(0, -1.414),
      result: new Complex(0.156155, -0.987733),
    },
    {
      n: new Complex(3.1415926, 2.71828),
      result: new Complex(-21.09813577338628775549, 9.5058016505054112496),
    },
  ];

  samples.forEach((sample, idx) => {
    it(`test ${idx + 1}`, () => {
      expect.hasAssertions();
      const { n, result } = sample;
      const exp = Complex.exp(n);
      expect(Complex.isEqual(result, exp, 2)).toBe(true);
      expect(Complex.isEqual(Complex.pow(new Complex(Math.E), n), exp, 2)).toBe(true);
    });
  });
});

describe('log', () => {
  const samples = [
    {
      n: new Complex(3, 4),
      result: new Complex(1.6094379124341, 0.9272952180),
    },
    {
      n: Complex.E,
      result: Complex.ONE,
    },
    {
      n: new Complex(3.1415, 2.71828),
      result: new Complex(1.424139884, 0.7132988),
    },
    {
      n: Complex.ZERO,
      result: Complex.NaN,
    },
  ];

  samples.forEach((sample, idx) => {
    it(`test ${idx + 1}`, () => {
      expect.hasAssertions();
      const { n, result } = sample;
      const log = Complex.log(n);
      expect(Complex.isEqual(result, log, 2)).toBe(true);
    });
  });
});

describe('trigos', () => {
  const samples = [
    {
      input: new Complex(3, 4),
      sin: new Complex(3.853738, -27.016813258),
      cos: new Complex(-27.0349456, -3.8511533348),
      tan: new Complex(-0.0001873462, 0.9993559874),
      csc: new Complex(0.005174473184, 0.03627588962863),
      sec: new Complex(-0.0362534969158689, 0.00516434460775),
      cot: new Complex(-0.00018758773798366, -1.00064439247156),
    },
    {
      input: Complex.ZERO,
      sin: Complex.ZERO,
      cos: Complex.ONE,
      tan: Complex.ZERO,
      csc: Complex.NaN,
      sec: Complex.ONE,
      cot: Complex.NaN,
    },
    {
      input: new Complex(0, 1),
      sin: new Complex(0, 1.1752011936438),
      cos: new Complex(1.543080634815243778),
      tan: new Complex(0, 0.76159415596),
      csc: new Complex(0, -0.85091812823932154513384),
      sec: new Complex(0.6480542736638854),
      cot: new Complex(0, -1.313035285499331),
    },
    {
      input: new Complex(1.234, -3.412),
      sin: new Complex(14.3265991, -5.005366649),
      cos: new Complex(5.0162637968676, 14.29547650461636),
      tan: new Complex(0.001358898, -1.0017002575),
      csc: new Complex(0.062207032354, 0.02173363),
      sec: new Complex(0.0218551, -0.0622833),
      cot: new Complex(0.00135429, 0.998301),
    },
    {
      input: new Complex(Math.PI / 4),
      sin: new Complex(1 / Math.SQRT2),
      cos: new Complex(1 / Math.SQRT2),
      tan: Complex.ONE,
      csc: new Complex(Math.SQRT2),
      sec: new Complex(Math.SQRT2),
      cot: Complex.ONE,
    },
    {
      input: new Complex(Math.PI / 2),
      sin: Complex.ONE,
      cos: Complex.ZERO,
      tan: Complex.NaN,
      csc: Complex.ONE,
      sec: Complex.NaN,
      cot: Complex.NaN,
    },
    {
      input: new Complex(Math.PI),
      sin: Complex.ZERO,
      cos: new Complex(-1),
      tan: Complex.ZERO,
      csc: Complex.NaN,
      sec: new Complex(-1),
      cot: Complex.NaN,
    },
  ];

  samples.forEach((sample, idx) => {
    it(`test ${idx + 1}`, () => {
      expect.hasAssertions();
      const {
        input,
        sin,
        cos,
        tan,
        csc,
        sec,
        cot,
      } = sample;
      const receivedSin = Complex.sin(input);
      const receivedCos = Complex.cos(input);
      const receivedTan = Complex.tan(input);
      const receivedCsc = Complex.csc(input);
      const receivedSec = Complex.sec(input);
      const receivedCot = Complex.cot(input);
      expect(Complex.isEqual(sin, receivedSin, 2)).toBe(true);
      expect(Complex.isEqual(cos, receivedCos, 2)).toBe(true);
      expect(Complex.isEqual(tan, receivedTan, 2)).toBe(true);
      expect(Complex.isEqual(csc, receivedCsc, 2)).toBe(true);
      expect(Complex.isEqual(sec, receivedSec, 2)).toBe(true);
      expect(Complex.isEqual(cot, receivedCot, 2)).toBe(true);
    });
  });
});

describe('inverse trigos', () => {
  describe('random tests', () => {
    for (let i = 0; i < 100; i++) {
      for (let toFixed = 0; toFixed < 3; toFixed++) {
        const input = getRandom(-4, 4, toFixed);
        it(`test ${i + 1} ${input.toString()}`, () => {
          expect.hasAssertions();
          const re = input.getReal();
          const im = input.getImaginary();
          expect(Complex.isEqual(Complex.sin(Complex.asin(input)), input, 2)).toBe(true);
          expect(Complex.isEqual(Complex.cos(Complex.acos(input)), input, 2)).toBe(true);
          if (re === 0 && (im === 1 || im === -1)) {
            expect(Complex.isNaN(Complex.atan(input))).toBe(true);
          } else {
            expect(Complex.isEqual(Complex.tan(Complex.atan(input)), input, 2)).toBe(true);
          }
          if (re === 0 && (im === 1 || im === 0 || im === -1)) {
            expect(Complex.isNaN(Complex.acot(input))).toBe(true);
          } else {
            expect(Complex.isEqual(Complex.cot(Complex.acot(input)), input, 2)).toBe(true);
          }
          if (re === 0 && im === 0) {
            expect(Complex.isNaN(Complex.acsc(input))).toBe(true);
            expect(Complex.isNaN(Complex.asec(input))).toBe(true);
          } else {
            expect(Complex.isEqual(Complex.csc(Complex.acsc(input)), input, 2)).toBe(true);
            expect(Complex.isEqual(Complex.sec(Complex.asec(input)), input, 2)).toBe(true);
          }
        });
      }
    }
  });

  describe('deterministic tests', () => {
    const samples = [
      {
        input: Complex.ZERO,
        asin: Complex.ZERO,
        acos: new Complex(Math.PI / 2),
        atan: Complex.ZERO,
        acsc: Complex.NaN,
        asec: Complex.NaN,
        acot: Complex.NaN,
      },
      {
        input: Complex.ONE,
        asin: new Complex(Math.PI / 2),
        acos: Complex.ZERO,
        atan: new Complex((-3 * Math.PI) / 4),
        acsc: new Complex(Math.PI / 2),
        asec: Complex.ZERO,
        acot: new Complex((-3 * Math.PI) / 4),
      },
      {
        input: new Complex(1.414),
        asin: new Complex(1.5707963268, -0.881159992388),
        acos: new Complex(0, 0.881159992388),
        atan: new Complex(-2.1863472300903286),
        acsc: new Complex(0.785549),
        asec: new Complex(0.785247),
        acot: new Complex(0.615551 - Math.PI),
      },
      {
        input: new Complex(0, 1), // i
        asin: new Complex(3.141592653589793, -0.88137358702),
        acos: new Complex(-1.5707963268, 0.88137358702),
        atan: Complex.NaN,
        acsc: new Complex(3.141592653589793, 0.88137358702),
        asec: new Complex(-1.5707963268, -0.88137358702),
        acot: Complex.NaN,
      },
    ];
    samples.forEach((sample, idx) => {
      it(`test ${idx + 1}`, () => {
        expect.hasAssertions();
        const {
          input,
          asin,
          acos,
          atan,
          acsc,
          asec,
          acot,
        } = sample;
        const receivedArcSin = Complex.asin(input);
        const receivedArcCos = Complex.acos(input);
        const receivedArcTan = Complex.atan(input);
        const receivedArcCsc = Complex.acsc(input);
        const receivedArcSec = Complex.asec(input);
        const receivedArcCot = Complex.acot(input);
        expect(Complex.isEqual(asin, receivedArcSin, 2)).toBe(true);
        expect(Complex.isEqual(acos, receivedArcCos, 2)).toBe(true);
        expect(Complex.isEqual(atan, receivedArcTan, 2)).toBe(true);
        expect(Complex.isEqual(acsc, receivedArcCsc, 2)).toBe(true);
        expect(Complex.isEqual(asec, receivedArcSec, 2)).toBe(true);
        expect(Complex.isEqual(acot, receivedArcCot, 2)).toBe(true);
      });
    });
  });
});
