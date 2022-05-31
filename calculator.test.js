const {
  sum,
  subtract,
  multiply,
  divide,
  modulus,
  even,
  odd,
} = require("./calculator");

describe('sum', () => { 
  
  test('can add two small positive numbers', () => {
    expected = 5;
    actual = sum(2, 3);
    expect(actual).toBe(expected);
  });

  test('can add two large positive numbers', () => { 
    expected = 1567;
    actual = sum(852, 715);
    expect(actual).toBe(expected);
  });

  test('can add two negative numbers', () => {
    expected = -22;
    actual = sum(-7, -15);
    expect(actual).toBe(expected);
  });

  test('can add zero', () => {
    expected = 23;
    actual = sum(23, 0);
    expect(actual).toBe(expected);
  });

});

describe('subtract', () => {

  test('can subtract two large numbers', () => {
    expected = 326;
    actual = subtract(564, 238);
    expect(actual).toBe(expected);
  });

  test('can subtract two negative numbers', () => {
    expected = -14;
    actual = subtract(-18, -4);
    expect(actual).toBe(expected);
  });

});

describe('multiply', () => {

  test('can multipl two large numbers', () => {
    expected = 28782;
    actual = multiply(234, 123);
    expect(actual).toBe(expected);
  });

  test('can multiply by zero', () => {
    expected = 0;
    actual = multiply(67, 0);
    expect(actual).toBe(expected);
  });

});

describe('divide', () => {

  test('can divide two large numbers', () => {
    expected = 23;
    actual = divide(12972, 564);
    expect(actual).toBe(expected);
  });

  test('can divide by 1', () => {
    expected = 23;
    actual = divide(23, 1);
    expect(actual).toBe(expected);
  });

});

describe('modulus', () => {

  test('can modulus even', () => {
    expected = 0;
    actual = modulus(56, 2);
    expect(actual).toBe(expected);
  });

  test('can modulus prime', () => {
    expected = 2;
    actual = modulus(29, 3);
    expect(actual).toBe(expected);
  });

});

describe('even', () => {

  test('can test even', () => {
    expected = true;
    actual = even(56);
    expect(actual).toBe(expected);
  });

  test('can test odd', () => {
    expected = false;
    actual = even(23);
    expect(actual).toBe(expected);
  });

});

describe('odd', () => {

  test('can test odd', () => {
    expected = true;
    actual = odd(35);
    expect(actual).toBe(expected);
  });

  test('can test even', () => {
    expected = false;
    actual = odd(22);
    expect(actual).toBe(expected);
  });

});
