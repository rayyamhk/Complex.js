const Complex = require('..');

describe('true cases', () => {
  const samples = [
    {
      num1: new Complex(3, 4),
      num2: new Complex(3, 4),
    },
    {
      num1: new Complex(3, 3.99999999),
      num2: new Complex(3.000000001, 4),
    },
    {
      num1: Complex.NaN,
      num2: Complex.NaN,
    },
  ];

  samples.forEach((sample, idx) => {
    it(`should be true ${idx + 1}`, () => {
      expect.hasAssertions();
      const {
        num1,
        num2,
      } = sample;
      expect(Complex.isEqual(num1, num2, 2)).toBe(true);
    });
  });
});

describe('false cases', () => {
  const samples = [
    {
      num1: new Complex(3, 4),
      num2: Complex.NaN,
    },
    {
      num1: new Complex(3, 4),
      num2: new Complex(3, NaN),
    },
    {
      num1: new Complex(3, 4),
      num2: new Complex(4, 3),
    },
    {
      num1: new Complex(3, 3.9),
      num2: new Complex(3.1, 4),
    },
  ];

  samples.forEach((sample, idx) => {
    it(`should be false ${idx + 1}`, () => {
      expect.hasAssertions();
      const {
        num1,
        num2,
      } = sample;
      expect(Complex.isEqual(num1, num2)).toBe(false);
    });
  });
});
