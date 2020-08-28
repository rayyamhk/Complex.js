const Complex = require('..');

describe('exponential tests', () => {
  const samples = [
    {
      n: new Complex(3, 4),
      exp: new Complex(-13.12878308146, -15.200784463068),
    },
    {
      n: new Complex(3),
      exp: new Complex(20.085536923187667741),
    },
    {
      n: new Complex(0, -1.414),
      exp: new Complex(0.156155, -0.987733),
    },
    {
      n: new Complex(3.1415926, 2.71828),
      exp: new Complex(-21.09813577338628775549, 9.5058016505054112496),
    },
  ];

  samples.forEach((sample, idx) => {
    it(`should get expected result ${idx + 1}`, () => {
      expect.hasAssertions();
      const {
        n,
        exp,
      } = sample;
      const result = Complex.exp(n);
      expect(Complex.isEqual(result, exp, 2)).toBe(true);
      expect(Complex.isEqual(Complex.pow(new Complex(Math.E), n), exp, 2)).toBe(true);
    });
  });
});
