const Complex = require('../index');

describe('true cases', () => {
  const samples = [
    Complex.NaN,
    new Complex(),
    new Complex(NaN),
    new Complex(1 / 0),
  ];
  samples.forEach((sample, idx) => {
    it(`should be true ${idx + 1}`, () => {
      expect.hasAssertions();
      expect(Complex.isNaN(sample)).toBe(true);
    });
  });
});

describe('false cases', () => {
  const samples = [
    Complex.ONE,
    Complex.ZERO,
    Complex.PI,
    Complex.E,
    new Complex(1.414),
    new Complex(3, 4),
  ];
  samples.forEach((sample, idx) => {
    it(`should be false ${idx + 1}`, () => {
      expect.hasAssertions();
      expect(Complex.isNaN(sample)).toBe(false);
    });
  });
});
