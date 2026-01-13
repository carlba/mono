class Node<T> {
  val: T;
  next: null | Node<T>;
  constructor(val: T) {
    this.val = val;
    this.next = null;
  }
}

/**
 * Converts a linked list to an array
 *
 * Time: O(?)
 * Space: O(?)
 */
export const sumList = (head: Node<number> | null): number => {
  let current: Node<number> | null = head;
  let sum = 0;

  while (current !== null) {
    sum += current.val;
    current = current.next;
  }

  return sum;
};
