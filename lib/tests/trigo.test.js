const Complex = require('../index');

describe('trigonometric function tests', () => {
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
    it(`should get expected result ${idx + 1}`, () => {
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
