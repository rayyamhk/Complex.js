const Complex = require('../index');

describe('log tests', () => {
  const samples = [
    {
      n: new Complex(3, 4),
      log: new Complex(1.6094379124341, 0.9272952180),
    },
    {
      n: Complex.E,
      log: Complex.ONE,
    },
    {
      n: new Complex(3.1415, 2.71828),
      log: new Complex(1.424139884, 0.7132988),
    },
    {
      n: Complex.ZERO,
      log: Complex.NaN,
    },
  ];

  samples.forEach((sample, idx) => {
    it(`should get expected result ${idx + 1}`, () => {
      expect.hasAssertions();
      const {
        n,
        log,
      } = sample;
      const result = Complex.log(n);
      expect(Complex.isEqual(result, log, 2)).toBe(true);
    });
  });
});
