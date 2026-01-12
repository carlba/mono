import { describe, it, expect } from 'vitest';

import { omit } from './type-safe-pick.js';

import { pick as lodashPick } from 'lodash';

describe('type-safe-pick', () => {
  it('should pick keys from object', () => {
    const obj = {
      a: 1,
      b: 2,
      c: 3,
    };

    const picked = lodashPick(obj, ['a', 'c', 'nisse']);

    expect(picked).toEqual({ a: 1, c: 3 });
  });

  it('should omit keys from object', () => {
    const obj = {
      a: 1,
      b: 2,
      c: 3,
    };

    const omitted = omit(obj, ['b']);

    expect(omitted).toEqual({ a: 1, c: 3 });
  });
});
