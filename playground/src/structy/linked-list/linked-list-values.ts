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
 * Time: O(n)
 * Space: O(n)
 */
export const linkedListValues = <T>(head: Node<T> | null): T[] => {
  let current = head;
  const values: T[] = [];
  while (current !== null) {
    values.push(current.val);
    current = current.next;
  }
  return values;
};
