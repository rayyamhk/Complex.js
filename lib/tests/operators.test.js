const Complex = require('../index');

describe('4 basic operator tests', () => {
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
    it(`should get expected result ${idx + 1}`, () => {
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
