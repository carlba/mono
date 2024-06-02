/**
 * Function that generates an array of fibonacci without recursion with 1
 */

function fibonacci(num: number): number {
  if (num < 2) {
    return num;
  } else {
    return fibonacci(num - 1);
  }
}

console.log(fibonacci(10)); // [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
