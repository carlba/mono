# Linked List

![linked-list-intro.mp4](linked-list-intro.mp4)

![Linked List Including End Head and Tail](tech/Programming/structy/linked-list/image.png)

A linked list comprises of a set of nodes(a datapoint) with a link to the next item. Usually this link is just referred to simply as the "next". The end of the linked list is usually indicated by `next` pointing to 'NULL'.

The first item of the linked list is called the `head`.

The last item in the linked list is referred to as `tail`

Reference implementation of a Linked List Node in Typescript

```typescript
class Node<T> {
  val: T;
  next: null | Node<T>;
  constructor(val: T) {
    this.val = val;
    this.next = null;
  }
}
```

## Difference Between Linked List and Array

An array is a fixed memory structure stored sequentially at one place in the memory whilst a linked list can be stored in many different positions linked by the next.

![Inserting Node/Element in Array and Linked List](tech/Programming/structy/linked-list/image-1.png)

To insert an element in the middle of an array all the elements after the items needs to be shifted. This is an O(n) operation and can be time consuming for long arrays.

For a linked list it is as simple as changing the next of the item at index 1 to the new node and in turn change the next of that node to 3. This operation is `0(1)`

## Traversing

[linked-list-warm-up-exercise.ts](linked-list-warm-up-exercise.ts). There is a sample of both the iterative and Recursive approach in this file.

## Iterative

A linked list can be traversed by created a function that starts at the node and iterates through the linked list using the `node.next` property. A `current` variable is needed to keep track of which element we are currently at.

## Recursive

A linked list can also be traversed recursively by calling the function with `node.next` as the argument. The base case is when the current node is `null`, indicating the end of the list has been reached.

**Key differences from iterative:**

- No `current` variable needed - the function parameter tracks position
- No loop - recursion handles the iteration
- Each recursive call processes one node and delegates the rest to the next call
- The base case (`head === null`) prevents infinite recursion

This pattern works for most linked list operations - the recursive call naturally moves through the list until reaching `null`.

## Linked List Values

[text](linked-list-values.ts)

Write a function, linkedListValues, that takes in the head of a linked list as an argument. The function should return an array containing all values of the nodes in the linked list.

Hey. This is our first linked list problem, so you should be liberal with watching the Approach and Walkthrough. Be productive! -AZ

### Approach

1. We should iterate through the linked list using the `node.next` property.
2. An array needs be pushed to as we traverse the linked list.

## Sum List

Write a function, sumList, that takes in the head of a linked list containing numbers as an argument. The function should return the total sum of all values in the linked list.

### Approach

![alt text](tech/Programming/structy/linked-list/image-2.png)

This should be pretty straightforward just iterate through the linked list and adding and adding the values into a sum.

### Solution

[text](sum-list.ts)

## Linked List Find

Write a function, linkedListFind, that takes in the head of a linked list and a target value. The function should return a boolean indicating whether or not the linked list contains the target.

### Approach and Solution

Slight variation on the same concept this time we just iterate through the list and return true if the target value matches the current value.

![alt text](./image-3.png)

## Get Node Value

Write a function, getNodeValue, that takes in the head of a linked list and an index. The function should return the value of the linked list at the specified index.

If there is no node at the given index, then return null.

## Reverse List

Write a function, reverseList, that takes in the head of a linked list as an argument. The function should reverse the order of the nodes in the linked list in-place and return the new head of the reversed linked list.

![alt text](image-4.png)
