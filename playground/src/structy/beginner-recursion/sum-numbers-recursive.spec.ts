import { describe, it, expect } from 'vitest';

import { sumNumbersRecursive } from './sum-numbers-recursive.js';

describe('sumNumbersRecursive', () => {
  it('test_00: returns sum of positive numbers', () => {
    const result = sumNumbersRecursive([5, 2, 9, 10]);
    expect(result).toBe(26);
  });

  it('test_01: returns sum with alternating positive and negative', () => {
    const result = sumNumbersRecursive([1, -1, 1, -1, 1, -1, 1]);
    expect(result).toBe(1);
  });

  it('test_02: returns 0 for empty array', () => {
    const result = sumNumbersRecursive([]);
    expect(result).toBe(0);
  });

  it('test_03: returns sum with large number and zeros', () => {
    const result = sumNumbersRecursive([1000, 0, 0, 0, 0, 0, 1]);
    expect(result).toBe(1001);
  });

  it('test_04: returns sum of descending powers of 10', () => {
    const result = sumNumbersRecursive([700, 70, 7]);
    expect(result).toBe(777);
  });

  it('test_05: returns sum of negative numbers', () => {
    const result = sumNumbersRecursive([-10, -9, -8, -7, -6, -5, -4, -3, -2, -1]);
    expect(result).toBe(-55);
  });

  it('test_06: returns 0 for array of all zeros', () => {
    const result = sumNumbersRecursive([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
    expect(result).toBe(0);
  });
});
