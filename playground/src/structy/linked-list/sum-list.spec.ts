import { describe, it, expect } from 'vitest';
import { sumList } from './sum-list.js';

class Node {
  val: number;
  next: Node | null;

  constructor(val: number) {
    this.val = val;
    this.next = null;
  }
}

describe('sumList', () => {
  it('test_00: should sum a linked list with multiple nodes including negative values', () => {
    const a = new Node(2);
    const b = new Node(8);
    const c = new Node(3);
    const d = new Node(-1);
    const e = new Node(7);

    a.next = b;
    b.next = c;
    c.next = d;
    d.next = e;

    // 2 -> 8 -> 3 -> -1 -> 7
    expect(sumList(a)).toBe(19);
  });

  it('test_01: should sum a two-node linked list', () => {
    const x = new Node(38);
    const y = new Node(4);

    x.next = y;

    // 38 -> 4
    expect(sumList(x)).toBe(42);
  });

  it('test_02: should sum a single node linked list', () => {
    const z = new Node(100);

    // 100
    expect(sumList(z)).toBe(100);
  });

  it('test_03: should return 0 for an empty list', () => {
    // null
    expect(sumList(null)).toBe(0);
  });
});
