import { describe, it, expect } from 'vitest';
import { getNodeValue, Node } from './get-node-value.js';

describe('getNodeValue', () => {
  it('test_00 - should return the value at index 2 from a 4-node list', () => {
    const a = new Node('a');
    const b = new Node('b');
    const c = new Node('c');
    const d = new Node('d');
    a.next = b;
    b.next = c;
    c.next = d;
    // a -> b -> c -> d
    expect(getNodeValue(a, 2)).toBe('c'); // 'c'
  });

  it('test_01 - should return the value at the last index (3) from a 4-node list', () => {
    const a = new Node('a');
    const b = new Node('b');
    const c = new Node('c');
    const d = new Node('d');
    a.next = b;
    b.next = c;
    c.next = d;
    // a -> b -> c -> d
    expect(getNodeValue(a, 3)).toBe('d'); // 'd'
  });

  it('test_02 - should return null when index is out of bounds (7 is beyond list length)', () => {
    const a = new Node('a');
    const b = new Node('b');
    const c = new Node('c');
    const d = new Node('d');
    a.next = b;
    b.next = c;
    c.next = d;
    // a -> b -> c -> d
    expect(getNodeValue(a, 7)).toBe(null); // null
  });

  it("test_03 - should return the first node's value (index 0) from a 2-node list", () => {
    const node1 = new Node('banana');
    const node2 = new Node('mango');
    node1.next = node2;
    // banana -> mango
    expect(getNodeValue(node1, 0)).toBe('banana'); // 'banana'
  });

  it("test_04 - should return the second node's value (index 1) from a 2-node list", () => {
    const node1 = new Node('banana');
    const node2 = new Node('mango');
    node1.next = node2;
    // banana -> mango
    expect(getNodeValue(node1, 1)).toBe('mango'); // 'mango'
  });
});
