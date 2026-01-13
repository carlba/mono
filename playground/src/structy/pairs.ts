/**
 *
 * Write a function, pairs, that takes in an array as an argument. The function should return an
 * array containing all unique pairs of elements.
 *
 * You may return the pairs in any order and the order of elements within a single pair does not
 * matter.You can assume that the input array contains unique elements.
 *
 * @see file://./README.md#pairs
 */
const pairs = (elements: string[]) => {
  const elementPairs: string[][] = [];
  for (let i = 0; i < elements.length; i += 1) {
    for (let j = i + 1; j < elements.length; j += 1) {
      elementPairs.push([elements[i], elements[j]]);
    }
  }
  return elementPairs;
};

console.log(pairs(['cherry', 'cranberry', 'banana', 'blueberry', 'lime', 'papaya']));
