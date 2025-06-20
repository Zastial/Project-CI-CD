const { sum } = require('../src/index.js');

describe('sum', () => {
  test('adds two positive numbers', () => {
    expect(sum(1, 2)).toBe(3);
  });

  test('adds two negative numbers', () => {
    expect(sum(-1, -2)).toBe(-3);
  });

  test('adds a positive and a negative number', () => {
    expect(sum(5, -2)).toBe(3);
  });

  test('adds zero and a number', () => {
    expect(sum(0, 7)).toBe(7);
    expect(sum(7, 0)).toBe(7);
  });

  test('adds two zeros', () => {
    expect(sum(0, 0)).toBe(0);
  });
});