const Complex = require('../index');

describe('conjugate tests', () => {
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
    it(`should get expected result ${idx + 1}`, () => {
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
