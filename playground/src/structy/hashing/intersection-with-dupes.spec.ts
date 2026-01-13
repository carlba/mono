import { describe, it, expect } from 'vitest';

import { intersectionWithDupes } from './intersection-with-dupes.js';

describe('intersectionWithDupes', () => {
  it('test_00: returns duplicate "b" from both arrays', () => {
    const result = intersectionWithDupes(['a', 'b', 'c', 'b'], ['x', 'y', 'b', 'b']);
    expect(result).toEqual(expect.arrayContaining(['b', 'b']));
    expect(result).toHaveLength(2);
  });

  it('test_01: returns intersection with correct duplicate count', () => {
    const result = intersectionWithDupes(['q', 'b', 'm', 's', 's', 's'], ['s', 'm', 's']);
    expect(result).toEqual(expect.arrayContaining(['m', 's', 's']));
    expect(result).toHaveLength(3);
  });

  it('test_02: returns single "r" when second array has one', () => {
    const result = intersectionWithDupes(['p', 'r', 'r', 'r'], ['r']);
    expect(result).toEqual(expect.arrayContaining(['r']));
    expect(result).toHaveLength(1);
  });

  it('test_03: returns single "r" when first array has one', () => {
    const result = intersectionWithDupes(['r'], ['p', 'r', 'r', 'r']);
    expect(result).toEqual(expect.arrayContaining(['r']));
    expect(result).toHaveLength(1);
  });

  it('test_04: returns empty array for disjoint sets', () => {
    const result = intersectionWithDupes(['t', 'v', 'u'], ['g', 'c', 'd', 'f']);
    expect(result).toEqual([]);
  });

  it('test_05: returns limited by smaller array count', () => {
    const result = intersectionWithDupes(['a', 'a', 'a', 'a', 'a', 'a'], ['a', 'a', 'a', 'a']);
    expect(result).toEqual(expect.arrayContaining(['a', 'a', 'a', 'a']));
    expect(result).toHaveLength(4);
  });

  it('test_06: handles large arrays efficiently', () => {
    const a: string[] = [];
    const b: string[] = [];
    for (let i = 0; i < 20000; i += 1) {
      a.push(String(i));
      b.push(String(i));
    }
    const result = intersectionWithDupes(a, b);
    expect(result).toHaveLength(20000);
  });
});
