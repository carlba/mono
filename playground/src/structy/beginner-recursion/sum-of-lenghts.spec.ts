import { describe, it, expect } from 'vitest';

import { sumOfLengths } from './sum-of-lengths.js';

describe('sumOfLengths', () => {
  it('returns sum of lengths for mixed length strings', () => {
    expect(sumOfLengths(['goat', 'cat', 'purple'])).toBe(13);
  });

  it('returns sum of lengths for varied strings', () => {
    expect(sumOfLengths(['bike', 'at', 'pencils', 'phone'])).toBe(18);
  });

  it('returns 0 for empty array', () => {
    expect(sumOfLengths([])).toBe(0);
  });

  it('returns 15 for array of strings with spaces', () => {
    expect(sumOfLengths(['', ' ', '  ', '   ', '    ', '     '])).toBe(15);
  });

  it('returns sum of lengths for numeric strings', () => {
    expect(sumOfLengths(['0', '313', '1234567890'])).toBe(14);
  });
});
