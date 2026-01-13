class Node<T> {
  val: T;
  next: null | Node<T>;
  constructor(val: T) {
    this.val = val;
    this.next = null;
  }
}

/**
 * Check if a certain value exists in a linked list
 *
 * Time: O(n)
 * Space: O(n)
 */
export const linkedListFind = <T>(head: Node<T> | null, target: T): boolean => {
  let current: Node<T> | null = head;

  while (current !== null) {
    if (target === current?.val) {
      return true;
    }
    current = current.next;
  }
  return false;
};

export const linkedListFindRecursive = <T>(head: Node<T> | null, target: T): boolean => {
  if (head === null) {
    return false;
  }

  if (head.val === target) {
    return true;
  }

  return linkedListFindRecursive(head.next, target);
};
