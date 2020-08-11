const Complex = require('./index');

function getRandom(min = 0, max = 1, toFixed = 0) {
  return new Complex(
    Number.parseFloat((Math.random() * (max - min) + min).toFixed(toFixed)),
    Number.parseFloat((Math.random() * (max - min) + min).toFixed(toFixed))
  );
}

describe('trigo', () => {
  describe('Pythagorean identities', () => {
    for (let i = 0; i < 100; i++) {
      for (let toFixed = 0; toFixed < 3; toFixed++) {
        test(`test ${i + 1}}`, () => {
          const input1 = getRandom(-10, 10, toFixed);
          const sin = Complex.sin(input1);
          const cos = Complex.cos(input1);
          const tan = Complex.tan(input1);
          const csc = Complex.csc(input1);
          const sec = Complex.sec(input1);
          const cot = Complex.cot(input1);
          
          // sin^2 + cos^2 = 1
          const identity1 = Complex.add(
            Complex.pow(sin, 2),
            Complex.pow(cos, 2)
          );
          expect(Complex.isEqual(identity1, Complex.ONE, 2)).toBe(true);

          // 1 + cot^2 = csc^2
          const identity2 = Complex.subtract(
            Complex.pow(csc, 2),
            Complex.pow(cot, 2)
          );
          if (!Complex.isNaN(identity2)) { // ignore input which is not inside domain
            expect(Complex.isEqual(identity2, Complex.ONE, 2)).toBe(true);
          }

          // 1 + tan^2 = sec^2
          const identity3 = Complex.subtract(
            Complex.pow(sec, 2),
            Complex.pow(tan, 2)
          );
          if (!Complex.isNaN(identity3)) {
            expect(Complex.isEqual(identity3, Complex.ONE, 2)).toBe(true);
          }
        });
      }
    }
  });

  describe('sin(a+b)', () => {
    for (let i = 0; i < 100; i++) {
      for (let toFixed = 0; toFixed < 3; toFixed++) {
        const a = getRandom(-10, 10, toFixed);
        const b = getRandom(-10, 10, toFixed);
        test(`test ${i + 1}} ${a.toString()} ${b.toString()}`, () => {
          const left = Complex.sin(Complex.add(a, b));
          const right = Complex.add(
            Complex.multiply(
              Complex.sin(a),
              Complex.cos(b)
            ),
            Complex.multiply(
              Complex.cos(a),
              Complex.sin(b)
            )
          );
          expect(Complex.isEqual(left, right, 2)).toBe(true);
        });
      }
    }
  });

  describe('cos(a-b)', () => {
    for (let i = 0; i < 100; i++) {
      for (let toFixed = 0; toFixed < 3; toFixed++) {
        const a = getRandom(-10, 10, toFixed);
        const b = getRandom(-10, 10, toFixed);
        test(`test ${i + 1}} ${a.toString()} ${b.toString()}`, () => {
          const left = Complex.cos(Complex.subtract(a, b));
          const right = Complex.add(
            Complex.multiply(
              Complex.cos(a),
              Complex.cos(b)
            ),
            Complex.multiply(
              Complex.sin(a),
              Complex.sin(b)
            )
          );
          expect(Complex.isEqual(left, right, 2)).toBe(true);
        });
      }
    }
  });

  describe('tan(a+b)', () => {
    for (let i = 0; i < 100; i++) {
      for (let toFixed = 0; toFixed < 3; toFixed++) {
        const a = getRandom(-10, 10, toFixed);
        const b = getRandom(-10, 10, toFixed);
        test(`test ${i + 1}} ${a.toString()} ${b.toString()}`, () => {
          const left = Complex.tan(Complex.add(a, b));
          const right = Complex.divide(
            Complex.add(
              Complex.tan(a),
              Complex.tan(b)
            ),
            Complex.subtract(
              Complex.ONE,
              Complex.multiply(
                Complex.tan(a),
                Complex.tan(b)
              )
            )
          );
          if (!Complex.isNaN(right)) {
            expect(Complex.isEqual(left, right, 2)).toBe(true);
          }
        });
      }
    }
  });

  describe('csc(a+b)', () => {
    for (let i = 0; i < 100; i++) {
      for (let toFixed = 0; toFixed < 3; toFixed++) {
        const a = getRandom(-10, 10, toFixed);
        const b = getRandom(-10, 10, toFixed);
        test(`test ${i + 1}} ${a.toString()} ${b.toString()}`, () => {
          const left = Complex.csc(Complex.add(a, b));
          const right = Complex.divide(
            Complex.multiply(
              Complex.multiply(
                Complex.multiply(
                  Complex.sec(a),
                  Complex.sec(b)
                ),
                Complex.csc(a)
              ),
              Complex.csc(b)
            ),
            Complex.add(
              Complex.multiply(
                Complex.sec(a),
                Complex.csc(b)
              ),
              Complex.multiply(
                Complex.csc(a),
                Complex.sec(b)
              )
            )
          );
          if (!Complex.isNaN(right)) {
            expect(Complex.isEqual(left, right, 2)).toBe(true);
          }
        });
      }
    }
  });

  describe('sec(a+b)', () => {
    for (let i = 0; i < 100; i++) {
      for (let toFixed = 0; toFixed < 3; toFixed++) {
        const a = getRandom(-10, 10, toFixed);
        const b = getRandom(-10, 10, toFixed);
        test(`test ${i + 1}} ${a.toString()} ${b.toString()}`, () => {
          const left = Complex.sec(Complex.add(a, b));
          const right = Complex.divide(
            Complex.multiply(
              Complex.multiply(
                Complex.multiply(
                  Complex.sec(a),
                  Complex.sec(b)
                ),
                Complex.csc(a)
              ),
              Complex.csc(b)
            ),
            Complex.subtract(
              Complex.multiply(
                Complex.csc(a),
                Complex.csc(b)
              ),
              Complex.multiply(
                Complex.sec(a),
                Complex.sec(b)
              )
            )
          );
          if (!Complex.isNaN(right)) {
            expect(Complex.isEqual(left, right, 2)).toBe(true);
          }
        });
      }
    }
  });

  describe('cot(a+b)', () => {
    for (let i = 0; i < 100; i++) {
      for (let toFixed = 0; toFixed < 3; toFixed++) {
        const a = getRandom(-10, 10, toFixed);
        const b = getRandom(-10, 10, toFixed);
        test(`test ${i + 1}} ${a.toString()} ${b.toString()}`, () => {
          const left = Complex.cot(Complex.add(a, b));
          const right = Complex.divide(
            Complex.subtract(
              Complex.multiply(
                Complex.cot(a),
                Complex.cot(b)
              ),
              Complex.ONE
            ),
            Complex.add(
              Complex.cot(b),
              Complex.cot(a)
            )
          );
          if (!Complex.isNaN(right)) {
            expect(Complex.isEqual(left, right, 2)).toBe(true);
          }
        });
      }
    }
  });

  describe('Relation to the complex exponential function', () => {
    describe('sin(x)', () => {
      for (let i = 0; i < 100; i++) {
        for (let toFixed = 0; toFixed < 3; toFixed++) {
          const num = getRandom(-10, 10, toFixed);
          test(`test${i + 1} ${num.toString()}`, () => {
            const left = Complex.sin(num);
            const right = Complex.divide(
              Complex.subtract(
                Complex.exp(
                  Complex.multiply(
                    new Complex(0, 1),
                    num
                  )
                ),
                Complex.exp(
                  Complex.multiply(
                    new Complex(0, -1),
                    num
                  )
                )
              ),
              new Complex(0, 2)
            );
            expect(Complex.isEqual(left, right, 2)).toBe(true);
          }); 
        }
      }
    });

    describe('cos(x)', () => {
      for (let i = 0; i < 100; i++) {
        for (let toFixed = 0; toFixed < 3; toFixed++) {
          const num = getRandom(-10, 10, toFixed);
          test(`test${i + 1} ${num.toString()}`, () => {
            const left = Complex.cos(num);
            const right = Complex.divide(
              Complex.add(
                Complex.exp(
                  Complex.multiply(
                    new Complex(0, 1),
                    num
                  )
                ),
                Complex.exp(
                  Complex.multiply(
                    new Complex(0, -1),
                    num
                  )
                )
              ),
              new Complex(2)
            );
            expect(Complex.isEqual(left, right, 2)).toBe(true);
          }); 
        }
      }
    });
  });
});

describe('cojugate', () => {
  for (let i = 0; i < 100; i++) {
    for (let toFixed = 0; toFixed < 3; toFixed++) {
      const num = getRandom(-10, 10, toFixed);
      test(`test ${i + 1} ${num.toString()}`, () => {
        const modulus = num.getModulus();
        const conjugate = Complex.conjugate(num);
        const _modulus = Complex.pow(
          Complex.multiply(
            num,
            conjugate
          ),
          0.5
        );
        expect(modulus).toBeCloseTo(_modulus.getReal());
      });
    }
  }
});

describe('pow', () => {
  for (let i = 0; i < 100; i++) {
    for (let toFixed = 0; toFixed < 3; toFixed++) {
      const num = getRandom(-10, 10, toFixed);
      const idx = Math.ceil(Math.random() * 19 + 1); // 1 - 20
      test(`test ${i + 1} ${num.toString()} ${idx}`, () => {
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

describe('exp & log', () => {
  for (let i = 0; i < 100; i++) {
    for (let toFixed = 0; toFixed < 3; toFixed++) {
      const num = getRandom(-10, 10, toFixed);
      test(`test ${i + 1} ${num.toString()}`, () => {
        const log = Complex.log(num);
        if (!Complex.isNaN(log)) {
          const exp = Complex.exp(log);
          expect(Complex.isEqual(exp, num, 2)).toBe(true);
        }
      });
    }
  }
});
