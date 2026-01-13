import { describe, it, expect } from 'vitest';

import { factorial } from './factorial.js';

describe('factorial', () => {
  it('test_00: returns 6 for 3!', () => {
    const result = factorial(3);
    expect(result).toBe(6);
  });

  it('test_01: returns 720 for 6!', () => {
    const result = factorial(6);
    expect(result).toBe(720);
  });

  it('test_02: returns large number for 18!', () => {
    const result = factorial(18);
    expect(result).toBe(6402373705728000);
  });

  it('test_03: returns 1 for 1!', () => {
    const result = factorial(1);
    expect(result).toBe(1);
  });

  it('test_04: returns large number for 13!', () => {
    const result = factorial(13);
    expect(result).toBe(6227020800);
  });

  it('test_05: returns 1 for 0! (base case)', () => {
    const result = factorial(0);
    expect(result).toBe(1);
  });
});
