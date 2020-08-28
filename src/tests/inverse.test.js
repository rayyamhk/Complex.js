const Complex = require('..');

describe('inverse tests', () => {
  const samples = [
    {
      num: new Complex(3, 4),
      inv: new Complex(3 / 25, -4 / 25),
    },
    {
      num: new Complex(3),
      inv: new Complex(1 / 3),
    },
    {
      num: new Complex(0, 1),
      inv: new Complex(0, -1),
    },
  ];

  samples.forEach((sample, idx) => {
    it(`should get expected result ${idx + 1}`, () => {
      expect.hasAssertions();
      const { num, inv } = sample;
      const result = Complex.inverse(num);
      expect(Complex.isEqual(result, inv, 2)).toBe(true);
    });
  });
});
