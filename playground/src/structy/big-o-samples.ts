/**
 * This will happen in constant time
 */
const greet = () => {
  const greeting = 'hello';
  console.log(greeting);
};

greet();

/**
 * This will also happen in constant time since object keys are hashes
 */
const existsInObject = (object: Record<string, string>, keyName: string) => {
  return keyName in object;
};

console.log(existsInObject({ a: 'test' }, 'a'));

/**
 * Time: O(n) Since the whole array could potentially require a pass to find a specific value.
 * Space: O(1)
 */
const existsInArray = <T>(arr: T[], value: T) => {
  return arr.includes(value);
};
console.log(existsInArray(['test'], 'test'));

/**
 * This will also happen in constant time O(n)
 */
const sumUsingFor = (arr: number[]) => {
  let sum = 0;
  for (const num of arr) {
    sum += num;
  }
  return sum;
};
console.log(`Sum of array is ${sumUsingFor([1, 1, 1, 10, 10])}`);

/** Time: O(n)
 *  Space: O(n) Since the range array grows with the size of n
 */
const range = (n: number) => {
  const range = [];
  for (let i = 1; i < n; i += 1) {
    range.push(i); // Constant time operation will not add additional complexity
  }
  return range;
};

console.log('Range', range(10));

/** Time: O(n^2) Since all the items of the array needs to be rearranged for each iteration of n
 *  Space: O(n) Since the range array grows with the size of n. It is not n^2 since it will not grow
 *              with the additional iterations made by the function.
 */
const reversedRange = (n: number) => {
  const range = [];
  for (let i = 1; i < n; i += 1) {
    /**
     * Insert value in front of an array. Since the value is inserted in the front of the array this
     * will be an n operation. What really happens is that when the item is added in front all the
     * other values has to be pushed one step in the array thus requiring an operation for each item
     * in the array.
     */
    range.unshift(i);
  }
  return range;
};

console.log('Range', reversedRange(10));
/**
 * Time: O(n^2) since the inner for loop will run for each other for loop
 * Space: O(1) since we are not creating any additional data structures
 */
const printPairs = (str: string) => {
  for (const charI of str) {
    for (const charJ of str) {
      console.log(`${charI} ${charJ}`);
    }
  }
  /** This will not add extra complexity since this is O(n) which is less complex than 0(n^2) */
  for (const char of str) {
    console.log(`${char}`);
  }
};

printPairs('test');
