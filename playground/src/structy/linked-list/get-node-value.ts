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
a.next = b;
b.next = c;
c.next = d;

/**
 * Time: O(n)
 * Space: O(1)
 */
export const getNodeValue = <T>(head: Node<T> | null, index: number): null | T => {
  console.log(head?.val, index);
  if (head === null) {
    return head;
  }
  if (index === 0) {
    return head.val;
  }
  return getNodeValue(head.next, index - 1);
};

/**
 * Time: O(n)
 * Space: O(n)
 */
export const getNodeValueIterative = <T>(head: Node<T> | null, index: number): null | T => {
  let current = head;
  let counter = 0;
  while (current !== null) {
    if (counter === index) {
      return current.val;
    }
    counter += 1;
    current = current.next;
  }
  return null;
};

console.log(getNodeValueIterative(a, 2));
