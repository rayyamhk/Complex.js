const Complex = require('./index');

function getRandom(min = 0, max = 1, toFixed = 0) {
  return new Complex(
    Number.parseFloat((Math.random() * (max - min) + min).toFixed(toFixed)),
    Number.parseFloat((Math.random() * (max - min) + min).toFixed(toFixed))
  );
};

describe('constructor', () => {
  test('0 arg', () => {
    const number = new Complex();
    expect(Number.isNaN(number.re)).toBe(true);
    expect(Number.isNaN(number.im)).toBe(true);
  });

  describe('1 argument', () => {
    test('1 int', () => {
      const number = new Complex(10);
      expect(number.re).toBe(10);
      expect(number.im).toBe(0);
    });
    test('1 float', () => {
      const number = new Complex(Math.PI);
      expect(number.re).toBe(Math.PI);
      expect(number.im).toBe(0);
    });
    test('1 inf', () => {
      const number = new Complex(Infinity);
      expect(Number.isNaN(number.re)).toBe(true);
      expect(Number.isNaN(number.re)).toBe(true);
    });
    test('1 NaN', () => {
      const number = new Complex(NaN);
      expect(Number.isNaN(number.re)).toBe(true);
      expect(Number.isNaN(number.re)).toBe(true);
    });
  });

  describe('2 arguments', () => {
    test('2 ints', () => {
      const number = new Complex(1, 2);
      expect(number.re).toBe(1);
      expect(number.im).toBe(2);
    });
    test('1 int 1 float', () => {
      const number = new Complex(1, 3.1415926);
      expect(number.re).toBe(1);
      expect(number.im).toBe(3.1415926);
    });
    test('1 float 1 int', () => {
      const number = new Complex(3.1415926, 1);
      expect(number.re).toBe(3.1415926);
      expect(number.im).toBe(1);
    });
    test('2 floats', () => {
      const number = new Complex(1.234, -4.321);
      expect(number.re).toBe(1.234);
      expect(number.im).toBe(-4.321);
    });
    test('1 inf 1 finite', () => {
      const number = new Complex(Infinity, Math.PI);
      expect(Number.isNaN(number.re)).toBe(true);
      expect(Number.isNaN(number.re)).toBe(true);
    });
    test('1 finite 1 inf', () => {
      const number = new Complex(Math.PI, Infinity);
      expect(Number.isNaN(number.re)).toBe(true);
      expect(Number.isNaN(number.re)).toBe(true);
    });
    test('2 infs', () => {
      const number = new Complex(Infinity, Infinity);
      expect(Number.isNaN(number.re)).toBe(true);
      expect(Number.isNaN(number.re)).toBe(true);
    });
    test('1 NaN 1 num', () => {
      const number = new Complex(NaN, Math.PI);
      expect(Number.isNaN(number.re)).toBe(true);
      expect(Number.isNaN(number.im)).toBe(true);
    });
    test('1 num 1 NaN', () => {
      const number = new Complex(Math.PI, NaN);
      expect(Number.isNaN(number.re)).toBe(true);
      expect(Number.isNaN(number.im)).toBe(true);
    });
    test('2 NaNs', () => {
      const number = new Complex(NaN, NaN);
      expect(Number.isNaN(number.re)).toBe(true);
      expect(Number.isNaN(number.im)).toBe(true);
    });
  });

  describe('invalid argument(s)', () => {
    test('string 1', () => {
      const number = new Complex('');
      expect(Number.isNaN(number.re)).toBe(true);
      expect(Number.isNaN(number.im)).toBe(true);
    });
    test('string 2', () => {
      const number = new Complex('   ');
      expect(Number.isNaN(number.re)).toBe(true);
      expect(Number.isNaN(number.im)).toBe(true);
    });
    test('string 3', () => {
      const number = new Complex('abc');
      expect(Number.isNaN(number.re)).toBe(true);
      expect(Number.isNaN(number.im)).toBe(true);
    });
    test('string 4', () => {
      const number = new Complex('3 + 4i');
      expect(Number.isNaN(number.re)).toBe(true);
      expect(Number.isNaN(number.im)).toBe(true);
    });
    test('string 5', () => {
      const number = new Complex('1.234');
      expect(Number.isNaN(number.re)).toBe(true);
      expect(Number.isNaN(number.im)).toBe(true);
    });
    test('array', () => {
      const number = new Complex([]);
      expect(Number.isNaN(number.re)).toBe(true);
      expect(Number.isNaN(number.im)).toBe(true);
    });
    test('object', () => {
      const number = new Complex({});
      expect(Number.isNaN(number.re)).toBe(true);
      expect(Number.isNaN(number.im)).toBe(true);
    });
    test('regex', () => {
      const number = new Complex(/^test$/);
      expect(Number.isNaN(number.re)).toBe(true);
      expect(Number.isNaN(number.im)).toBe(true);
    });
    test('function', () => {
      const number = new Complex(() => {});
      expect(Number.isNaN(number.re)).toBe(true);
      expect(Number.isNaN(number.im)).toBe(true);
    });
    test('instance', () => {
      const number = new Complex(new Complex());
      expect(Number.isNaN(number.re)).toBe(true);
      expect(Number.isNaN(number.im)).toBe(true);
    });
    test('date', () => {
      const number = new Complex(new Date());
      expect(Number.isNaN(number.re)).toBe(true);
      expect(Number.isNaN(number.im)).toBe(true);
    });
    test('null', () => {
      const number = new Complex(null);
      expect(Number.isNaN(number.re)).toBe(true);
      expect(Number.isNaN(number.im)).toBe(true);
    });
    test('undefined', () => {
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
      arg: Math.PI * 3 / 2,
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
    test(`test ${idx + 1}`, () => {
      const { num, re, im ,module, arg } = sample;
      const _re = num.getReal(),
            _im = num.getImaginary(),
            _module = num.getModulus(),
            _arg = num.getArgument();
      expect(_re).toBe(re);
      expect(_im).toBe(im);
      expect(_module).toBe(module);
      if (arg === undefined) {
        expect(_arg).toBeUndefined;
      } else {
        expect(_arg).toBeCloseTo(arg);
      }
    })
  });
});

describe('equal', () => {
  describe('should be true', () => {
    test('complex number equals to itself', () => {
      const num = new Complex(3, 4);
      expect(Complex.isEqual(num, num)).toBe(true);
    });

    test('ignore extremely small difference', () => {
      const num1 = new Complex(3, 3.99999999);
      const num2 = new Complex(3.000000001, 4);
      expect(Complex.isEqual(num1, num2, 2)).toBe(true);
    });

    test('NaN equals NaN', () => {
      const num = Complex.NaN;
      expect(Complex.isEqual(num, num)).toBe(true);
    });
  });

  describe('should be false', () => {
    test('NaN not equals to non-NaN 1 ', () => {
      const num1 = new Complex(3, 4);
      const num2 = Complex.NaN;
      expect(Complex.isEqual(num1, num2)).toBe(false);
    });

    test('NaN not equals to non-NaN 2', () => {
      const num1 = new Complex(3, 4);
      const num2 = new Complex(3, NaN);
      expect(Complex.isEqual(num1, num2)).toBe(false);
    });

    test('different numbers return false', () => {
      const num1 = new Complex(3, 4);
      const num2 = new Complex(4, 3);
      expect(Complex.isEqual(num1, num2)).toBe(false);
    });

    test('large difference', () => {
      const num1 = new Complex(3, 3.9);
      const num2 = new Complex(3.1, 4);
      expect(Complex.isEqual(num1, num2)).toBe(false);
    });
  });
});

describe('isNaN', () => {
  const isNaN = Complex.isNaN;
  describe('true', () => {
    test('true 1', () => {
      expect(isNaN(Complex.NaN)).toBe(true);
    });

    test('true 2', () => {
      expect(isNaN(new Complex())).toBe(true);
    });

    test('true 3', () => {
      expect(isNaN(new Complex(NaN))).toBe(true);
    });
  });

  describe('false', () => {
    test('false 1', () => {
      expect(isNaN(Complex.ONE)).toBe(false);
    });

    test('false 2', () => {
      expect(isNaN(new Complex(3))).toBe(false);
    });

    test('false 3', () => {
      expect(isNaN(new Complex(1.234, 4.321))).toBe(false);
    });
  });
});

describe('operations', () => {
  const samples = [
    {
      num1: new Complex(1),
      num2: new Complex(3.1415926),
      sum: new Complex(4.1415926),
      diff: new Complex(-2.1415926),
      product: new Complex(3.1415926),
      quotient: new Complex(1/3.1415926),
    },
    {
      num1: new Complex(1, 0),
      num2: new Complex(2, 0),
      sum: new Complex(3, 0),
      diff: new Complex(-1, 0),
      product: new Complex(2, 0),
      quotient: new Complex(1/2, 0),
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
      quotient: new Complex(1/3.14, 0),
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
      quotient: new Complex(34/53, -13/53),
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
      quotient: new Complex(3/25, -4/25),
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
    test(`test ${idx + 1}`, () => {
      const {
        num1,
        num2,
        sum,
        diff,
        product,
        quotient,
      } = sample;
      const _sum = Complex.add(num1, num2);
      const _diff = Complex.subtract(num1, num2);
      const _product = Complex.multiply(num1, num2);
      const _quotient = Complex.divide(num1, num2);
      expect(Complex.isEqual(_sum, sum, 2)).toBe(true);
      expect(Complex.isEqual(_diff, diff, 2)).toBe(true);
      expect(Complex.isEqual(_product, product, 2)).toBe(true);
      expect(Complex.isEqual(_quotient, quotient, 2)).toBe(true);
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
      result: new Complex(-237/9765625, 3116/9765625),
    },
    {
      num: new Complex(3, 4),
      n: -5,
      result: new Complex(-237/9765625, 3116/9765625),
    },
    {
      num: new Complex(3, 4),
      n: 1/2,
      result: new Complex(2, 1),
    },
    {
      num: new Complex(3, 4),
      n: 1/3,
      result: new Complex(1.628937145922176, 0.52017450230454584),
    },
    {
      num: new Complex(3, 4),
      n: 1/4,
      result: new Complex(1.455346690225, 0.34356074972),
    },
    {
      num: new Complex(3, 4),
      n: 1/5,
      result: new Complex(1.356069653781815374, 0.254419010311623283482),
    },
    {
      num: new Complex(3, 4),
      n: 1/11,
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
    test(`test ${idx + 1}`, () => {
      const {
        num,
        n,
        result,
      } = sample;
      const _result = Complex.pow(num, n);
      expect(Complex.isEqual(result, _result, 2)).toBe(true);
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
    test(`test ${idx + 1}`, () => {
      const {
        num,
        conjugate,
      } = sample;
      const _conjugate = Complex.conjugate(num);
      expect(Complex.isEqual(conjugate, _conjugate, 2)).toBe(true);
    });
  });
});

describe('inverse', () => {
  const samples = [
    {
      num: new Complex(3, 4),
      inv: new Complex(3/25, -4/25),
    },
    {
      num: new Complex(3),
      inv: new Complex(1/3),
    },
    {
      num: new Complex(0, 1),
      inv: new Complex(0, -1),
    },
  ];
  samples.forEach((sample, idx) => {
    test(`test ${idx + 1}`, () => {
      const { num, inv } = sample;
      const _inv = Complex.inverse(num);
      expect(Complex.isEqual(_inv, inv, 2)).toBe(true);
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
    test(`test ${idx + 1}`, () => {
      const { n, result } = sample;
      const _result = Complex.exp(n);
      expect(Complex.isEqual(result, _result, 2)).toBe(true);
      expect(Complex.isEqual(Complex.pow(new Complex(Math.E), n), _result, 2)).toBe(true);
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
    test(`test ${idx + 1}`, () => {
      const { n, result } = sample;
      const _result = Complex.log(n);
      expect(Complex.isEqual(result, _result, 2)).toBe(true);
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
    test(`test ${idx + 1}`, () => {
      const { input, sin, cos, tan, csc, sec, cot } = sample;
      const _sin = Complex.sin(input);
      const _cos = Complex.cos(input);
      const _tan = Complex.tan(input);
      const _csc = Complex.csc(input);
      const _sec = Complex.sec(input);
      const _cot = Complex.cot(input);
      expect(Complex.isEqual(sin, _sin, 2)).toBe(true);
      expect(Complex.isEqual(cos, _cos, 2)).toBe(true);
      expect(Complex.isEqual(tan, _tan, 2)).toBe(true);
      expect(Complex.isEqual(csc, _csc, 2)).toBe(true);
      expect(Complex.isEqual(sec, _sec, 2)).toBe(true);
      expect(Complex.isEqual(cot, _cot, 2)).toBe(true);
    });
  })
});

describe('inverse trigos', () => {
  describe('random tests', () => {
    for (let i = 0; i < 100; i++) {
      for (let toFixed = 0; toFixed < 3; toFixed++) {
        const input = getRandom(-4, 4, toFixed);
        test(`test ${i + 1} ${input.toString()}`, () => {
        const re = input.getReal(),
              im = input.getImaginary();
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
        atan: new Complex(-3 * Math.PI / 4),
        acsc: new Complex(Math.PI / 2),
        asec: Complex.ZERO,
        acot: new Complex(-3 * Math.PI / 4),
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
      }
    ];
    samples.forEach((sample, idx) => {
      test(`test ${idx + 1}`, () => {
        const { input, asin, acos, atan, acsc, asec, acot } = sample;
        const _asin = Complex.asin(input);
        const _acos = Complex.acos(input);
        const _atan = Complex.atan(input);
        const _acsc = Complex.acsc(input);
        const _asec = Complex.asec(input);
        const _acot = Complex.acot(input);
        expect(Complex.isEqual(asin, _asin, 2)).toBe(true);
        expect(Complex.isEqual(acos, _acos, 2)).toBe(true);
        expect(Complex.isEqual(atan, _atan, 2)).toBe(true);
        expect(Complex.isEqual(acsc, _acsc, 2)).toBe(true);
        expect(Complex.isEqual(asec, _asec, 2)).toBe(true);
        expect(Complex.isEqual(acot, _acot, 2)).toBe(true);
      });
    });
  });
});
