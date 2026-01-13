import { describe, it, expect } from 'vitest';

import { allUnique } from './all-unique.js';

describe('allUnique', () => {
  it('test_00: returns true for all unique characters', () => {
    const result = allUnique(['q', 'r', 's', 'a']);
    expect(result).toBe(true);
  });

  it('test_01: returns false when there are duplicates', () => {
    const result = allUnique(['q', 'r', 's', 'a', 'r', 'z']);
    expect(result).toBe(false);
  });

  it('test_02: returns true for unique color names', () => {
    const result = allUnique(['red', 'blue', 'yellow', 'green', 'orange']);
    expect(result).toBe(true);
  });

  it('test_03: returns false for duplicate words', () => {
    const result = allUnique(['cat', 'cat', 'dog']);
    expect(result).toBe(false);
  });

  it('test_04: returns false for duplicate letters in autumn', () => {
    const result = allUnique(['a', 'u', 't', 'u', 'm', 'n']);
    expect(result).toBe(false);
  });
});
