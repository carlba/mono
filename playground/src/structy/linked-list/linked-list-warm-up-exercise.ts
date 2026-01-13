class Node<T> {
  val: T;
  next: null | Node<T>;
  constructor(val: T) {
    this.val = val;
    this.next = null;
  }
}

const a = new Node('A');
const b = new Node('B');
const c = new Node('C');
const d = new Node('D');

a.next = b;
b.next = c;
c.next = d;

// A -> B -> C -> D -> NULL

const printLinkedList = <T>(head: Node<T>) => {
  let current: Node<T> | null = head;
  while (current !== null) {
    console.log(current.val);
    current = current.next;
  }
};

printLinkedList(a);

const printLinkedListRecursive = <T>(head: Node<T> | null) => {
  if (head === null) {
    return;
  }

  console.log(head.val);
  printLinkedListRecursive(head.next);
};

printLinkedListRecursive(a);
