const Complex = require('..');

describe('inverse trigonometric function tests', () => {
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
    it(`should get expected result ${idx + 1}`, () => {
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
