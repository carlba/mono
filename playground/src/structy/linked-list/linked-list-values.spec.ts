import { describe, it, expect } from 'vitest';

class Node<T> {
  val: T;
  next: null | Node<T>;
  constructor(val: T) {
    this.val = val;
    this.next = null;
  }
}

import { linkedListValues } from './linked-list-values.js';

describe('linkedListValues', () => {
  it('test_00: returns array of values for linked list a -> b -> c -> d', () => {
    const a = new Node('a');
    const b = new Node('b');
    const c = new Node('c');
    const d = new Node('d');

    a.next = b;
    b.next = c;
    c.next = d;

    // a -> b -> c -> d
    const result = linkedListValues(a);
    expect(result).toEqual(['a', 'b', 'c', 'd']);
  });

  it('test_01: returns array of values for linked list x -> y', () => {
    const x = new Node('x');
    const y = new Node('y');

    x.next = y;

    // x -> y
    const result = linkedListValues(x);
    expect(result).toEqual(['x', 'y']);
  });

  it('test_02: returns array with single value for single node q', () => {
    const q = new Node('q');

    // q
    const result = linkedListValues(q);
    expect(result).toEqual(['q']);
  });

  it('test_03: returns empty array for null head', () => {
    const result = linkedListValues(null);
    expect(result).toEqual([]);
  });
});
