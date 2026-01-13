import { describe, it, expect } from 'vitest';
import { reverseList, Node } from './reverse-list.js';

describe('reverseList', () => {
  it('test_00 - should reverse a 6-node linked list', () => {
    const a = new Node('a');
    const b = new Node('b');
    const c = new Node('c');
    const d = new Node('d');
    const e = new Node('e');
    const f = new Node('f');
    a.next = b;
    b.next = c;
    c.next = d;
    d.next = e;
    e.next = f;
    // a -> b -> c -> d -> e -> f
    expect(reverseList(a)).toBe(f); // f -> e -> d -> c -> b -> a
  });

  it('test_01 - should reverse a 2-node linked list', () => {
    const x = new Node('x');
    const y = new Node('y');
    x.next = y;
    // x -> y
    expect(reverseList(x)).toBe(y); // y -> x
  });

  it('test_02 - should handle a single node linked list', () => {
    const p = new Node('p');
    // p
    expect(reverseList(p)).toBe(p); // p
  });
});
