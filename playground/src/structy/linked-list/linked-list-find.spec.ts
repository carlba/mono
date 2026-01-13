import { describe, it, expect } from 'vitest';
import { linkedListFindRecursive as linkedListFind } from './linked-list-find.js';

class Node<T> {
  val: T;
  next: Node<T> | null;

  constructor(val: T) {
    this.val = val;
    this.next = null;
  }
}

describe('linkedListFind', () => {
  it('test_00: should find a value in the middle of a linked list', () => {
    const a = new Node('a');
    const b = new Node('b');
    const c = new Node('c');
    const d = new Node('d');

    a.next = b;
    b.next = c;
    c.next = d;

    // a -> b -> c -> d
    expect(linkedListFind(a, 'c')).toBe(true);
  });

  it('test_01: should find a value at the end of a linked list', () => {
    const a = new Node('a');
    const b = new Node('b');
    const c = new Node('c');
    const d = new Node('d');

    a.next = b;
    b.next = c;
    c.next = d;

    // a -> b -> c -> d
    expect(linkedListFind(a, 'd')).toBe(true);
  });

  it('test_02: should return false when value is not in the linked list', () => {
    const a = new Node('a');
    const b = new Node('b');
    const c = new Node('c');
    const d = new Node('d');

    a.next = b;
    b.next = c;
    c.next = d;

    // a -> b -> c -> d
    expect(linkedListFind(a, 'q')).toBe(false);
  });

  it('test_03: should find a string value in a two-node linked list', () => {
    const node1 = new Node('jason');
    const node2 = new Node('leneli');

    node1.next = node2;

    // jason -> leneli
    expect(linkedListFind(node1, 'jason')).toBe(true);
  });

  it('test_04: should find a number value in a single-node linked list', () => {
    const node1 = new Node(42);

    // 42
    expect(linkedListFind(node1, 42)).toBe(true);
  });

  it('test_05: should return false when searching for a different number in a single-node linked list', () => {
    const node1 = new Node(42);

    // 42
    expect(linkedListFind(node1, 100)).toBe(false);
  });
});
