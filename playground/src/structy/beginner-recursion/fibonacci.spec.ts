import { describe, it, expect } from 'vitest';

import { fibonacci } from './fibonacci.js';

describe('fibonacci', () => {
  it('test_00: returns 0 for n=0', () => {
    const result = fibonacci(0);
    expect(result).toBe(0);
  });

  it('test_01: returns 1 for n=1', () => {
    const result = fibonacci(1);
    expect(result).toBe(1);
  });

  it('test_02: returns 1 for n=2', () => {
    const result = fibonacci(2);
    expect(result).toBe(1);
  });

  it('test_03: returns 2 for n=3', () => {
    const result = fibonacci(3);
    expect(result).toBe(2);
  });

  it('test_04: returns 3 for n=4', () => {
    const result = fibonacci(4);
    expect(result).toBe(3);
  });

  it('test_05: returns 5 for n=5', () => {
    const result = fibonacci(5);
    expect(result).toBe(5);
  });

  it('test_06: returns 21 for n=8', () => {
    const result = fibonacci(8);
    expect(result).toBe(21);
  });
});
