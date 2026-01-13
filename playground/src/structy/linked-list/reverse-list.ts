export class Node<T> {
  val: T;
  next: null | Node<T>;
  constructor(val: T) {
    this.val = val;
    this.next = null;
  }
}

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

/**
 * Reverse a linked list
 *
 * Time: O(?)
 * Space: O(?)
 */
export const reverseList = <T>(head: Node<T> | null): Node<T> | null => {
  let current = head;
  let previous = null;
  while (current !== null) {
    const next = current.next;
    current.next = previous;
    previous = current;
    current = next;
  }
  return previous;
};

console.log(reverseList(a));
