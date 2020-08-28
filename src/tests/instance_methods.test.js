/* eslint-disable jest/no-conditional-expect */
const Complex = require('..');

describe('instance methods tests', () => {
  const samples = [
    {
      num: new Complex(0),
      re: 0,
      im: 0,
      module: 0,
      arg: undefined,
    },
    {
      num: new Complex(10, 0),
      re: 10,
      im: 0,
      module: 10,
      arg: 0,
    },
    {
      num: new Complex(0, 10),
      re: 0,
      im: 10,
      module: 10,
      arg: Math.PI / 2,
    },
    {
      num: new Complex(-10, 0),
      re: -10,
      im: 0,
      module: 10,
      arg: Math.PI,
    },
    {
      num: new Complex(0, -10),
      re: 0,
      im: -10,
      module: 10,
      arg: (Math.PI * 3) / 2,
    },
    {
      num: new Complex(3, 4),
      re: 3,
      im: 4,
      module: 5,
      arg: 0.927295218,
    },
    {
      num: new Complex(-3, 4),
      re: -3,
      im: 4,
      module: 5,
      arg: 2.214297436,
    },
    {
      num: new Complex(-3, -4),
      re: -3,
      im: -4,
      module: 5,
      arg: 4.068887872,
    },
    {
      num: new Complex(3, -4),
      re: 3,
      im: -4,
      module: 5,
      arg: 5.355890089,
    },
  ];

  samples.forEach((sample, idx) => {
    it(`should get expected result ${idx + 1}`, () => {
      expect.hasAssertions();
      const {
        num,
        re,
        im,
        module,
        arg,
      } = sample;
      const expectedReal = num.getReal();
      const expectedImaginary = num.getImaginary();
      const expectedModule = num.getModulus();
      const expectedArg = num.getArgument();
      expect(expectedReal).toBe(re);
      expect(expectedImaginary).toBe(im);
      expect(expectedModule).toBe(module);
      if (arg === undefined) { // 0
        expect(expectedArg).toBeUndefined();
      } else {
        expect(expectedArg).toBeCloseTo(arg);
      }
    });
  });
});
