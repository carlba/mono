import { describe, it, expect } from 'vitest';

import { exclusiveItems } from './exclusive-items.js';

describe('exclusiveItems', () => {
  it('should return the symmetric difference of two arrays', () => {
    const result = exclusiveItems([4, 2, 1, 6], [3, 6, 9, 2, 10]);
    expect(result).toEqual(expect.arrayContaining([4, 1, 3, 9, 10]));
  });

  it('returns the unique value when second array is subset', () => {
    const result = exclusiveItems([2, 4, 6], [4, 2]);
    expect(result).toEqual([6]);
  });

  it('returns only values unique to the larger array', () => {
    const result = exclusiveItems([4, 2, 1], [1, 2, 4, 6]);
    expect(result).toEqual([6]);
  });

  it('handles disjoint arrays', () => {
    const result = exclusiveItems([0, 1, 2], [10, 11]);
    expect(result).toEqual([0, 1, 2, 10, 11]);
  });

  it('returns empty array for identical large arrays', () => {
    const size = 60000;
    const a = Array.from({ length: size }, (_, i) => i);
    const b = Array.from({ length: size }, (_, i) => i);
    const result = exclusiveItems(a, b);
    expect(result).toEqual([]);
  });
});
