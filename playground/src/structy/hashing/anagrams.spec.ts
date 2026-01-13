import { describe, it, expect } from 'vitest';

import { anagrams } from './anagrams.js';

describe('anagrams', () => {
  it('test_00: returns true for restful and fluster', () => {
    const result = anagrams('restful', 'fluster');
    expect(result).toBe(true);
  });

  it('test_01: returns false for cats and tocs', () => {
    const result = anagrams('cats', 'tocs');
    expect(result).toBe(false);
  });

  it('test_02: returns true for monkeyswrite and newyorktimes', () => {
    const result = anagrams('monkeyswrite', 'newyorktimes');
    expect(result).toBe(true);
  });

  it('test_03: returns false for paper and reapa', () => {
    const result = anagrams('paper', 'reapa');
    expect(result).toBe(false);
  });

  it('test_04: returns true for elbow and below', () => {
    const result = anagrams('elbow', 'below');
    expect(result).toBe(true);
  });

  it('test_05: returns false for tax and taxi (different lengths)', () => {
    const result = anagrams('tax', 'taxi');
    expect(result).toBe(false);
  });

  it('test_06: returns false for taxi and tax (different lengths)', () => {
    const result = anagrams('taxi', 'tax');
    expect(result).toBe(false);
  });

  it('test_07: returns true for night and thing', () => {
    const result = anagrams('night', 'thing');
    expect(result).toBe(true);
  });

  it('test_08: returns false for abbc and aabc (different character counts)', () => {
    const result = anagrams('abbc', 'aabc');
    expect(result).toBe(false);
  });

  it('test_09: returns false for po and popp (different lengths)', () => {
    const result = anagrams('po', 'popp');
    expect(result).toBe(false);
  });

  it('test_10: returns false for pp and oo (different characters)', () => {
    const result = anagrams('pp', 'oo');
    expect(result).toBe(false);
  });
});
