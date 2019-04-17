const perimeter = require('../src/main.js');

describe('perimeter function', () => {
  it('defines perimeter', () => {
    expect(perimeter).toBeDefined();
  });

  it('allows only one argument to be 0', () => {
    expect(perimeter(3, 0)).toBeGreaterThan(0);
    expect(perimeter(0, 5)).toBeGreaterThan(0);
  });

  it('allows does not allow both arguments to be 0', () => {
    expect(perimeter(0, 0)).toContain("Both values can't be 0!");
  });

  it('takes in two arguments and returns a positive number', () => {
    expect(perimeter(3, 5)).toBeGreaterThan(0);
    expect(perimeter(3, 5)).toBe(16);
  });
});
