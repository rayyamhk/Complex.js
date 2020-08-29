# Complex.js
A lightweight and easy-to-use library for you to manipulate complex numbers

## Features
- Lightweight
- Comprehensive
- Easy to use
- No dependencies
- 1000+ Test cases
- No INFINITY!!

## Install
```
npm install --save @rayyamhk/complex
```

## How to use
```javascript
const Complex = require('@rayyamhk/complex');

const num1 = new Complex(3, 4); // 3 + 4i
const num2 = new Complex(-2); // -2 + 0i
const sum = Complex.add(num1, num2);
console.log(sum.toString()); // '1 + 4i'
```

## Build
```
npm install
npm run build
```
It creates a production version in `/build`

## Test
```
npm install
npm run test
```
It runs all tests in `/lib/tests`

## API
[https://rayyamhk.github.io/Complex.js/index.html](https://rayyamhk.github.io/Complex.js/index.html)

## Examples

### constructor(re, im)
```javascript
new Complex(); // Complex.NaN
new Complex(3); // 3 + 0i
new Complex(Infinity); // Complex.NaN
new Complex('3'); // Complex.NaN
new Complex(3, 4); // 3 + 4i
new Complex(3, Infinity); // Complex.NaN
```

### Instance methods

#### getReal()
```javascript
new Complex(3, 4).getReal(); // 3
new Complex(0, 1).getReal(); // 0
```

#### getImaginary()
```javascript
new Complex(3, 4).getImaginary(); // 4
Complex.ZERO.getImaginary(); // 0
```

#### getModulus()
Note that the modulus of the complex number is the length of the vector representing the complex number on complex plane.
```javascript
new Complex(3, 4).getModulus(); // 5
Complex.ZERO.getModulus(); // 0
```

#### getArgument()
Note that the argument of the complex number is the angle between positive real-axis and the vector representing the complex number on complex plane.
```javascript
new Complex(3, 3).getArgument(); // π/4
Complex.ZERO.getArgument(); // undefined
```

#### toString()
```javascript
new Complex(3, 4).toString(); // '3 + 4i'
new Complex(3.1415).toString(); // '3.1415'
Complex.NaN.toString(); // 'NaN'
```

### Static methods

#### isNaN(num)
```javascript
Complex.isNaN(new Complex(3)); // false
Complex.isNaN(new Complex(3, 4)); // false
Complex.isNaN(new Complex(Infinity)); // true
Complex.isNaN(Complex.NaN); // true
```

#### isEqual(num1, num2, digit = 15)
The optional argument `digit` limits the number of digits to check after the decimal point.\
The test criterion is `Math.abs(x - y) < 1 / (10 ** digit * 2)`. For default value 15, it should be `5e-16`.
That means if the difference of two numbers is less than `5e-16`, they are considered as same value.
```javascript
const num1 = new Complex(3, 4);
const num2 = new Complex(3 + 4e-16, 4);
const num3 = new Complex(3 + 4e-16, 4 + 6e-16);
Complex.isEqual(num1, num2); // true as the diff of real parts is less than 5e-16
Complex.isEqual(num1, num3); // false as the diff of imaginary parts is greater than 5e-16

Complex.isEqual(Complex.NaN, new Complex(1 / 0)); // true as both are considered as NaN
```

#### 4 basic operations
Note that for `Complex.divide`, if the denominator, i.e. `num2`, is considered as `0`, it returns `Complex.NaN`.
```javascript
const num1 = new Complex(3, 4);
const num2 = new Complex(-1, 2);

Complex.add(num1, num2); // 2 + 6i
Complex.subtract(num1, num2); // 4 + 2i
Complex.multiply(num1, num2); // -11 + 2i
Complex.divide(num1, num2); // 1 - 2i
Complex.divide(num1, Complex.ZERO); // Complex.NaN
```

#### conjugate(num)
```javascript
Complex.conjugate(new Complex(3, 4)); // 3 - 4i
Complex.conjugate(new Complex(3, -4)); // 3 + 4i
Complex.conjugate(new Complex(-3, 4)); // -3 - 4i
Complex.conjugate(new Complex(3)); // 3 - 0i
Complex.conjugate(Complex.NaN); // Complex.NaN
```

#### inverse(num)
```javascript
Complex.inverse(new Complex(3, 4)); // 3 / 25 - 4i / 25
Complex.inverse(Complex.ZERO); // Complex.NaN
```

#### pow(base, exponent)
The `exponent` can be either `number` or instance of `Complex`.\
You can find the k-th root of complex number by setting the exponent to `1 / k`. But you **should** know that it only returns one out of k possible solutions.
```javascript
Complex.pow(z, 2); // z to the power of 2
Complex.pow(z, 1.234); // z to the power of 1.234
Complex.pow(z, 0); // Complex.ONE
Complex.pow(z, -2); // 1 divided by z to the power of 2
Complex.pow(z, 1 / 4); // one of the 4-th root of z
```

#### exp(num)
```javascript
Complex.exp(Complex.ZERO); // Complex.ONE
Complex.exp(new Complex(3, 4)); // -13.128783... - 15.200784463...i
```

#### log(num)
It calculates the natural log of the complex number.\
Note that the complex log is a multivalued function, but this function only returns the principal value by restricting the imaginary part to the interval [0, 2π).
```javascript
Complex.log(Complex.E); // Complex.ONE
Complex.log(Complex.ZERO); // Complex.NaN
```

#### 6 trigonometric functions
It calculates the value of sin, cos, tan, csc, sec, cot of the complex number.\
Note that if the argument is out of its domain, it returns `Complex.NaN`
```javascript
Complex.sin(num); // Domain: entire complex plane C
Complex.cos(num); // Domain: entire complex plane C

Complex.tan(num); // Domain: entire complex plane C except the set { (2k+1)*π/2 : k is any integer }
Complex.tan(new Complex(Math.PI / 2)); // Complex.NaN

Complex.csc(num); // Domain: entire complex plane C except the set { kπ : k is any integer }
Complex.csc(Complex.ZERO); // Complex.NaN

Complex.sec(num); // Domain: entire complex plane C except the set { (2k+1)*π/2 : k is any integer }
Complex.sec(new Complex(Math.PI / 2)); // Complex.NaN

Complex.cot(num); // Domain: entire complex plane C except the set { kπ/2 : k is any integer }
Complex.cot(Complex.PI); // Complex.NaN
```

#### 6 inverse of trigonometric functions
It calculates the value of arcsin, arccos, arctan, arccsc, arcsec, arccot of the complex number.\
Note that if the argument is out of its domain, it returns `Complex.NaN`
```javascript
Complex.asin(num); // Domain: entire complex plane C
Complex.acos(num); // Domain: entire complex plane C
Complex.atan(num); // Domain: entire complex plane C except the set { i, -i }
Complex.acsc(num); // Domain: entire complex plane C except the set { 0 }
Complex.asec(num); // Domain: entire complex plane C except the set { 0 }
Complex.acot(num); // Domain: entire complex plane C except the set { i, -i , 0 }
```

## How to contribute
You are welcome to contribute by:
- Reporting bugs
- Fixing bugs
- Adding new features
- Improving performance
- Improving code style of this library

## License
MIT
