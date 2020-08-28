const Complex = require('..');

describe('pow tests', () => {
  const samples = [
    {
      base: Complex.ONE,
      exponent: 10,
      received: Complex.ONE,
    },
    {
      base: Complex.ZERO,
      exponent: 10,
      received: Complex.ZERO,
    },
    {
      base: Complex.ONE,
      exponent: 0,
      received: Complex.ONE,
    },
    {
      base: Complex.ZERO,
      exponent: 0,
      received: Complex.ONE,
    },
    {
      base: Complex.ZERO,
      exponent: 0,
      received: Complex.ONE,
    },
    {
      base: new Complex(2),
      exponent: 10,
      received: new Complex(2 ** 10),
    },
    {
      base: new Complex(3, 4),
      exponent: 10,
      received: new Complex(-9653287, 1476984),
    },
    {
      base: new Complex(3, 4),
      exponent: -5,
      received: new Complex(-237 / 9765625, 3116 / 9765625),
    },
    {
      base: new Complex(3, 4),
      exponent: -5,
      received: new Complex(-237 / 9765625, 3116 / 9765625),
    },
    {
      base: new Complex(3, 4),
      exponent: 1 / 2,
      received: new Complex(2, 1),
    },
    {
      base: new Complex(3, 4),
      exponent: 1 / 3,
      received: new Complex(1.628937145922176, 0.52017450230454584),
    },
    {
      base: new Complex(3, 4),
      exponent: 1 / 4,
      received: new Complex(1.455346690225, 0.34356074972),
    },
    {
      base: new Complex(3, 4),
      exponent: 1 / 5,
      received: new Complex(1.356069653781815374, 0.254419010311623283482),
    },
    {
      base: new Complex(3, 4),
      exponent: 1 / 11,
      received: new Complex(1.15344730250367, 0.09746609384727),
    },
    {
      base: new Complex(3, 4),
      exponent: 1.2,
      received: new Complex(3.05053, 6.18754),
    },
    {
      base: new Complex(3, 4),
      exponent: 1.234,
      received: new Complex(3.01449, 6.63388),
    },
    {
      base: new Complex(3, 4),
      exponent: -1.234,
      received: new Complex(0.0567749, -0.124942),
    },
    {
      base: new Complex(0, 1),
      exponent: 1.2,
      received: new Complex(-0.309017, 0.951057),
    },
    {
      base: new Complex(2, 0),
      exponent: Math.PI,
      received: new Complex(2 ** Math.PI, 0),
    },
    {
      base: new Complex(3, 45),
      exponent: 0,
      received: Complex.ONE,
    },
    {
      base: new Complex(-45, 54),
      exponent: 1,
      received: new Complex(-45, 54),
    },
    {
      base: Complex.ZERO,
      exponent: Math.PI,
      received: Complex.ZERO,
    },
    {
      base: Complex.ZERO,
      exponent: 0,
      received: Complex.ONE,
    },
    {
      base: Complex.NaN,
      exponent: 7,
      received: Complex.NaN,
    },
    {
      base: new Complex(-4),
      exponent: 1 / 2,
      received: new Complex(0, 2),
    },
    {
      base: new Complex(3, 4),
      exponent: new Complex(3, 4),
      received: new Complex(-2.997990598421, 0.62378458627904401),
    },
    {
      base: new Complex(3, 4),
      exponent: new Complex(3),
      received: new Complex(-117, 44),
    },
    {
      base: new Complex(3, 4),
      exponent: new Complex(0, 1.234),
      received: new Complex(-0.12847, 0.291389),
    },
    {
      base: new Complex(3.1415926),
      exponent: new Complex(2.71828),
      received: new Complex(3.1415926 ** 2.71828),
    },
    {
      base: new Complex(3.1415926),
      exponent: new Complex(0, 2.71828),
      received: new Complex(-0.999553, 0.0298919),
    },
    {
      base: new Complex(3.1415926),
      exponent: new Complex(1.414, 2.71828),
      received: new Complex(-5.04401, 0.150842),
    },
  ];

  samples.forEach((sample, idx) => {
    it(`should get expected result ${idx + 1}`, () => {
      expect.hasAssertions();
      const {
        base,
        exponent,
        received,
      } = sample;
      const result = Complex.pow(base, exponent);
      expect(Complex.isEqual(received, result, 2)).toBe(true);
    });
  });
});
