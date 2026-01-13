import { describe, it, expect } from 'vitest';

import { palindrome } from './palindrome-recursive.js';

describe('palindrome', () => {
  it('test_00: returns true for "pop"', () => {
    const result = palindrome('pop');
    expect(result).toBe(true);
  });

  it('test_01: returns true for "kayak"', () => {
    const result = palindrome('kayak');
    expect(result).toBe(true);
  });

  it('test_02: returns false for "pops"', () => {
    const result = palindrome('pops');
    expect(result).toBe(false);
  });

  it('test_03: returns false for "boot"', () => {
    const result = palindrome('boot');
    expect(result).toBe(false);
  });

  it('test_04: returns true for "rotator"', () => {
    const result = palindrome('rotator');
    expect(result).toBe(true);
  });

  it('test_05: returns false for "abcbca"', () => {
    const result = palindrome('abcbca');
    expect(result).toBe(false);
  });

  it('test_06: returns true for empty string', () => {
    const result = palindrome('');
    expect(result).toBe(true);
  });
});
