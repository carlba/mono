import { describe, it, expect } from 'vitest';

import { reverseString } from './reverse-string.js';

describe('reverseString', () => {
  it('test_00: reverses "hello" to "olleh"', () => {
    const result = reverseString('hello');
    expect(result).toBe('olleh');
  });

  it('test_01: reverses "abcdefg" to "gfedcba"', () => {
    const result = reverseString('abcdefg');
    expect(result).toBe('gfedcba');
  });

  it('test_02: reverses "stopwatch" to "hctawpots"', () => {
    const result = reverseString('stopwatch');
    expect(result).toBe('hctawpots');
  });

  it('test_03: returns empty string for empty input', () => {
    const result = reverseString('');
    expect(result).toBe('');
  });
});
