/* eslint-disable jest/no-conditional-expect */
const Complex = require('..');

function getRandom(min = 0, max = 1, toFixed = 0) {
  return new Complex(
    Number.parseFloat((Math.random() * (max - min) + min).toFixed(toFixed)),
    Number.parseFloat((Math.random() * (max - min) + min).toFixed(toFixed)),
  );
}

describe('trigo related tests', () => {
  describe('pythagorean identities', () => {
    for (let i = 0; i < 20; i++) {
      for (let toFixed = 0; toFixed < 3; toFixed++) {
        const value = getRandom(-10, 10, toFixed);
        const sin = Complex.sin(value);
        const cos = Complex.cos(value);
        const tan = Complex.tan(value);
        const csc = Complex.csc(value);
        const sec = Complex.sec(value);
        const cot = Complex.cot(value);

        it(`test sin^2 + cos^2 = 1 ${i + 1}}`, () => {
          expect.hasAssertions();
          const identity1 = Complex.add(
            Complex.pow(sin, 2),
            Complex.pow(cos, 2),
          );
          expect(Complex.isEqual(identity1, Complex.ONE, 2)).toBe(true);
        });

        it(`test 1 + cot^2 = csc^2 ${i + 1}}`, () => {
          expect.hasAssertions();
          const identity2 = Complex.subtract(
            Complex.pow(csc, 2),
            Complex.pow(cot, 2),
          );
          if (!Complex.isNaN(identity2)) { // ignore input which is not inside domain
            expect(Complex.isEqual(identity2, Complex.ONE, 2)).toBe(true);
          } else {
            expect(Complex.isNaN(identity2)).toBe(true);
          }
        });

        it(`test 1 + tan^2 = sec^2 ${i + 1}}`, () => {
          expect.hasAssertions();
          const identity3 = Complex.subtract(
            Complex.pow(sec, 2),
            Complex.pow(tan, 2),
          );
          if (!Complex.isNaN(identity3)) {
            expect(Complex.isEqual(identity3, Complex.ONE, 2)).toBe(true);
          } else {
            expect(Complex.isNaN(identity3)).toBe(true);
          }
        });
      }
    }
  });

  describe('sin(a+b)', () => {
    for (let i = 0; i < 20; i++) {
      for (let toFixed = 0; toFixed < 3; toFixed++) {
        const a = getRandom(-10, 10, toFixed);
        const b = getRandom(-10, 10, toFixed);
        it(`idx: ${i + 1}}, a: ${a.toString()}, b: ${b.toString()}`, () => {
          expect.hasAssertions();
          const left = Complex.sin(Complex.add(a, b));
          const right = Complex.add(
            Complex.multiply(
              Complex.sin(a),
              Complex.cos(b),
            ),
            Complex.multiply(
              Complex.cos(a),
              Complex.sin(b),
            ),
          );
          expect(Complex.isEqual(left, right, 2)).toBe(true);
        });
      }
    }
  });

  describe('cos(a-b)', () => {
    for (let i = 0; i < 20; i++) {
      for (let toFixed = 0; toFixed < 3; toFixed++) {
        const a = getRandom(-10, 10, toFixed);
        const b = getRandom(-10, 10, toFixed);
        it(`idx: ${i + 1}, a: ${a.toString()}, b: ${b.toString()}`, () => {
          expect.hasAssertions();
          const left = Complex.cos(Complex.subtract(a, b));
          const right = Complex.add(
            Complex.multiply(
              Complex.cos(a),
              Complex.cos(b),
            ),
            Complex.multiply(
              Complex.sin(a),
              Complex.sin(b),
            ),
          );
          expect(Complex.isEqual(left, right, 2)).toBe(true);
        });
      }
    }
  });

  describe('tan(a+b)', () => {
    for (let i = 0; i < 20; i++) {
      for (let toFixed = 0; toFixed < 3; toFixed++) {
        const a = getRandom(-10, 10, toFixed);
        const b = getRandom(-10, 10, toFixed);
        it(`idx: ${i + 1}, a: ${a.toString()}, b: ${b.toString()}`, () => {
          expect.hasAssertions();
          const left = Complex.tan(Complex.add(a, b));
          const right = Complex.divide(
            Complex.add(
              Complex.tan(a),
              Complex.tan(b),
            ),
            Complex.subtract(
              Complex.ONE,
              Complex.multiply(
                Complex.tan(a),
                Complex.tan(b),
              ),
            ),
          );
          if (!Complex.isNaN(right)) {
            expect(Complex.isEqual(left, right, 2)).toBe(true);
          } else {
            expect(Complex.isNaN(right)).toBe(true);
          }
        });
      }
    }
  });

  describe('csc(a+b)', () => {
    for (let i = 0; i < 20; i++) {
      for (let toFixed = 0; toFixed < 3; toFixed++) {
        const a = getRandom(-10, 10, toFixed);
        const b = getRandom(-10, 10, toFixed);
        it(`idx: ${i + 1}, a: ${a.toString()}, b: ${b.toString()}`, () => {
          expect.hasAssertions();
          const left = Complex.csc(Complex.add(a, b));
          const right = Complex.divide(
            Complex.multiply(
              Complex.multiply(
                Complex.multiply(
                  Complex.sec(a),
                  Complex.sec(b),
                ),
                Complex.csc(a),
              ),
              Complex.csc(b),
            ),
            Complex.add(
              Complex.multiply(
                Complex.sec(a),
                Complex.csc(b),
              ),
              Complex.multiply(
                Complex.csc(a),
                Complex.sec(b),
              ),
            ),
          );
          if (!Complex.isNaN(right)) {
            expect(Complex.isEqual(left, right, 2)).toBe(true);
          } else {
            expect(Complex.isNaN(right)).toBe(true);
          }
        });
      }
    }
  });

  describe('sec(a+b)', () => {
    for (let i = 0; i < 20; i++) {
      for (let toFixed = 0; toFixed < 3; toFixed++) {
        const a = getRandom(-10, 10, toFixed);
        const b = getRandom(-10, 10, toFixed);
        it(`idx: ${i + 1}, a: ${a.toString()}, b: ${b.toString()}`, () => {
          expect.hasAssertions();
          const left = Complex.sec(Complex.add(a, b));
          const right = Complex.divide(
            Complex.multiply(
              Complex.multiply(
                Complex.multiply(
                  Complex.sec(a),
                  Complex.sec(b),
                ),
                Complex.csc(a),
              ),
              Complex.csc(b),
            ),
            Complex.subtract(
              Complex.multiply(
                Complex.csc(a),
                Complex.csc(b),
              ),
              Complex.multiply(
                Complex.sec(a),
                Complex.sec(b),
              ),
            ),
          );
          if (!Complex.isNaN(right)) {
            expect(Complex.isEqual(left, right, 2)).toBe(true);
          } else {
            expect(Complex.isNaN(right)).toBe(true);
          }
        });
      }
    }
  });

  describe('cot(a+b)', () => {
    for (let i = 0; i < 20; i++) {
      for (let toFixed = 0; toFixed < 3; toFixed++) {
        const a = getRandom(-10, 10, toFixed);
        const b = getRandom(-10, 10, toFixed);
        it(`idx: ${i + 1}, a: ${a.toString()}, b: ${b.toString()}`, () => {
          expect.hasAssertions();
          const left = Complex.cot(Complex.add(a, b));
          const right = Complex.divide(
            Complex.subtract(
              Complex.multiply(
                Complex.cot(a),
                Complex.cot(b),
              ),
              Complex.ONE,
            ),
            Complex.add(
              Complex.cot(b),
              Complex.cot(a),
            ),
          );
          if (!Complex.isNaN(right)) {
            expect(Complex.isEqual(left, right, 2)).toBe(true);
          } else {
            expect(Complex.isNaN(right)).toBe(true);
          }
        });
      }
    }
  });

  describe('relation to the complex exponential function', () => {
    describe('sin(x)', () => {
      for (let i = 0; i < 20; i++) {
        for (let toFixed = 0; toFixed < 3; toFixed++) {
          const num = getRandom(-10, 10, toFixed);
          it(`idx: ${i + 1}, x: ${num.toString()}`, () => {
            expect.hasAssertions();
            const left = Complex.sin(num);
            const right = Complex.divide(
              Complex.subtract(
                Complex.exp(
                  Complex.multiply(
                    new Complex(0, 1),
                    num,
                  ),
                ),
                Complex.exp(
                  Complex.multiply(
                    new Complex(0, -1),
                    num,
                  ),
                ),
              ),
              new Complex(0, 2),
            );
            expect(Complex.isEqual(left, right, 2)).toBe(true);
          });
        }
      }
    });

    describe('cos(x)', () => {
      for (let i = 0; i < 20; i++) {
        for (let toFixed = 0; toFixed < 3; toFixed++) {
          const num = getRandom(-10, 10, toFixed);
          it(`idx: ${i + 1}, x: ${num.toString()}`, () => {
            expect.hasAssertions();
            const left = Complex.cos(num);
            const right = Complex.divide(
              Complex.add(
                Complex.exp(
                  Complex.multiply(
                    new Complex(0, 1),
                    num,
                  ),
                ),
                Complex.exp(
                  Complex.multiply(
                    new Complex(0, -1),
                    num,
                  ),
                ),
              ),
              new Complex(2),
            );
            expect(Complex.isEqual(left, right, 2)).toBe(true);
          });
        }
      }
    });
  });
});

describe('cojugate & modulus tests', () => {
  for (let i = 0; i < 20; i++) {
    for (let toFixed = 0; toFixed < 3; toFixed++) {
      const num = getRandom(-10, 10, toFixed);
      it(`idx: ${i + 1}, x: ${num.toString()}`, () => {
        expect.hasAssertions();
        const modulus = num.getModulus();
        const conjugate = Complex.conjugate(num);
        const ReceivedModulus = Complex.pow(
          Complex.multiply(
            num,
            conjugate,
          ),
          0.5,
        );
        expect(modulus).toBeCloseTo(ReceivedModulus.getReal());
      });
    }
  }
});

describe('pow & root tests', () => {
  for (let i = 0; i < 20; i++) {
    for (let toFixed = 0; toFixed < 3; toFixed++) {
      const num = getRandom(-10, 10, toFixed);
      const idx = Math.ceil(Math.random() * 19 + 1); // 1 - 20
      it(`idx: ${i + 1}, x: ${num.toString()}, toFixed: ${idx}`, () => {
        expect.hasAssertions();
        // Note that it only provides one of the solution if you
        // want to calculate n-th root
        // due to the fact that complex log is multivalued function
        const root = Complex.pow(num, 1 / idx);
        const pow = Complex.pow(root, idx);
        expect(Complex.isEqual(num, pow, 2)).toBe(true);
      });
    }
  }
});

describe('exp & log tests', () => {
  for (let i = 0; i < 20; i++) {
    for (let toFixed = 0; toFixed < 3; toFixed++) {
      const num = getRandom(-10, 10, toFixed);
      const log = Complex.log(num);
      if (!Complex.isNaN(log)) {
        it(`idx: ${i + 1}, x: ${num.toString()}`, () => {
          expect.hasAssertions();
          const exp = Complex.exp(log);
          expect(Complex.isEqual(exp, num, 2)).toBe(true);
        });
      }
    }
  }
});

describe('trigo & inverse trigo tests', () => {
  for (let i = 0; i < 100; i++) {
    for (let toFixed = 0; toFixed < 3; toFixed++) {
      const input = getRandom(-4, 4, toFixed);
      it(`idx: ${i + 1}, theta: ${input.toString()}, toFixed: ${toFixed}`, () => {
        expect.hasAssertions();
        const re = input.getReal();
        const im = input.getImaginary();
        expect(Complex.isEqual(Complex.sin(Complex.asin(input)), input, 2)).toBe(true);
        expect(Complex.isEqual(Complex.cos(Complex.acos(input)), input, 2)).toBe(true);
        if (re === 0 && (im === 1 || im === -1)) {
          expect(Complex.isNaN(Complex.atan(input))).toBe(true);
        } else {
          expect(Complex.isEqual(Complex.tan(Complex.atan(input)), input, 2)).toBe(true);
        }
        if (re === 0 && (im === 1 || im === 0 || im === -1)) {
          expect(Complex.isNaN(Complex.acot(input))).toBe(true);
        } else {
          expect(Complex.isEqual(Complex.cot(Complex.acot(input)), input, 2)).toBe(true);
        }
        if (re === 0 && im === 0) {
          expect(Complex.isNaN(Complex.acsc(input))).toBe(true);
          expect(Complex.isNaN(Complex.asec(input))).toBe(true);
        } else {
          expect(Complex.isEqual(Complex.csc(Complex.acsc(input)), input, 2)).toBe(true);
          expect(Complex.isEqual(Complex.sec(Complex.asec(input)), input, 2)).toBe(true);
        }
      });
    }
  }
});
