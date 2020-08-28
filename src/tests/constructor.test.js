const Complex = require('..');

describe('constructor tests', () => {
  it('0 arg', () => {
    expect.hasAssertions();
    const number = new Complex();
    expect(Number.isNaN(number.re)).toBe(true);
    expect(Number.isNaN(number.im)).toBe(true);
  });

  describe('1 argument', () => {
    it('1 int', () => {
      expect.hasAssertions();
      const number = new Complex(10);
      expect(number.re).toBe(10);
      expect(number.im).toBe(0);
    });
    it('1 float', () => {
      expect.hasAssertions();
      const number = new Complex(Math.PI);
      expect(number.re).toBe(Math.PI);
      expect(number.im).toBe(0);
    });
    it('1 inf', () => {
      expect.hasAssertions();
      const number = new Complex(Infinity);
      expect(Number.isNaN(number.re)).toBe(true);
      expect(Number.isNaN(number.re)).toBe(true);
    });
    it('1 NaN', () => {
      expect.hasAssertions();
      const number = new Complex(NaN);
      expect(Number.isNaN(number.re)).toBe(true);
      expect(Number.isNaN(number.re)).toBe(true);
    });
  });

  describe('2 arguments', () => {
    it('2 ints', () => {
      expect.hasAssertions();
      const number = new Complex(1, 2);
      expect(number.re).toBe(1);
      expect(number.im).toBe(2);
    });
    it('1 int 1 float', () => {
      expect.hasAssertions();
      const number = new Complex(1, 3.1415926);
      expect(number.re).toBe(1);
      expect(number.im).toBe(3.1415926);
    });
    it('1 float 1 int', () => {
      expect.hasAssertions();
      const number = new Complex(3.1415926, 1);
      expect(number.re).toBe(3.1415926);
      expect(number.im).toBe(1);
    });
    it('2 floats', () => {
      expect.hasAssertions();
      const number = new Complex(1.234, -4.321);
      expect(number.re).toBe(1.234);
      expect(number.im).toBe(-4.321);
    });
    it('1 inf 1 finite', () => {
      expect.hasAssertions();
      const number = new Complex(Infinity, Math.PI);
      expect(Number.isNaN(number.re)).toBe(true);
      expect(Number.isNaN(number.re)).toBe(true);
    });
    it('1 finite 1 inf', () => {
      expect.hasAssertions();
      const number = new Complex(Math.PI, Infinity);
      expect(Number.isNaN(number.re)).toBe(true);
      expect(Number.isNaN(number.re)).toBe(true);
    });
    it('2 infs', () => {
      expect.hasAssertions();
      const number = new Complex(Infinity, Infinity);
      expect(Number.isNaN(number.re)).toBe(true);
      expect(Number.isNaN(number.re)).toBe(true);
    });
    it('1 NaN 1 num', () => {
      expect.hasAssertions();
      const number = new Complex(NaN, Math.PI);
      expect(Number.isNaN(number.re)).toBe(true);
      expect(Number.isNaN(number.im)).toBe(true);
    });
    it('1 num 1 NaN', () => {
      expect.hasAssertions();
      const number = new Complex(Math.PI, NaN);
      expect(Number.isNaN(number.re)).toBe(true);
      expect(Number.isNaN(number.im)).toBe(true);
    });
    it('2 NaNs', () => {
      expect.hasAssertions();
      const number = new Complex(NaN, NaN);
      expect(Number.isNaN(number.re)).toBe(true);
      expect(Number.isNaN(number.im)).toBe(true);
    });
  });

  describe('invalid argument(s)', () => {
    it('string 1', () => {
      expect.hasAssertions();
      const number = new Complex('');
      expect(Number.isNaN(number.re)).toBe(true);
      expect(Number.isNaN(number.im)).toBe(true);
    });
    it('string 2', () => {
      expect.hasAssertions();
      const number = new Complex('   ');
      expect(Number.isNaN(number.re)).toBe(true);
      expect(Number.isNaN(number.im)).toBe(true);
    });
    it('string 3', () => {
      expect.hasAssertions();
      const number = new Complex('abc');
      expect(Number.isNaN(number.re)).toBe(true);
      expect(Number.isNaN(number.im)).toBe(true);
    });
    it('string 4', () => {
      expect.hasAssertions();
      const number = new Complex('3 + 4i');
      expect(Number.isNaN(number.re)).toBe(true);
      expect(Number.isNaN(number.im)).toBe(true);
    });
    it('string 5', () => {
      expect.hasAssertions();
      const number = new Complex('1.234');
      expect(Number.isNaN(number.re)).toBe(true);
      expect(Number.isNaN(number.im)).toBe(true);
    });
    it('array', () => {
      expect.hasAssertions();
      const number = new Complex([]);
      expect(Number.isNaN(number.re)).toBe(true);
      expect(Number.isNaN(number.im)).toBe(true);
    });
    it('object', () => {
      expect.hasAssertions();
      const number = new Complex({});
      expect(Number.isNaN(number.re)).toBe(true);
      expect(Number.isNaN(number.im)).toBe(true);
    });
    it('regex', () => {
      expect.hasAssertions();
      const number = new Complex(/^test$/);
      expect(Number.isNaN(number.re)).toBe(true);
      expect(Number.isNaN(number.im)).toBe(true);
    });
    it('function', () => {
      expect.hasAssertions();
      const number = new Complex(() => {});
      expect(Number.isNaN(number.re)).toBe(true);
      expect(Number.isNaN(number.im)).toBe(true);
    });
    it('instance', () => {
      expect.hasAssertions();
      const number = new Complex(new Complex());
      expect(Number.isNaN(number.re)).toBe(true);
      expect(Number.isNaN(number.im)).toBe(true);
    });
    it('date', () => {
      expect.hasAssertions();
      const number = new Complex(new Date());
      expect(Number.isNaN(number.re)).toBe(true);
      expect(Number.isNaN(number.im)).toBe(true);
    });
    it('null', () => {
      expect.hasAssertions();
      const number = new Complex(null);
      expect(Number.isNaN(number.re)).toBe(true);
      expect(Number.isNaN(number.im)).toBe(true);
    });
    it('undefined', () => {
      expect.hasAssertions();
      const number = new Complex(undefined);
      expect(Number.isNaN(number.re)).toBe(true);
      expect(Number.isNaN(number.im)).toBe(true);
    });
  });
});
