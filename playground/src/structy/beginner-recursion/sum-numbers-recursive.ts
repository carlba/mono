/**
 * Time: O(n^2)
 * Space: O(n^2)
 */
export const sumNumbersRecursive = (numbers: number[]): number => {
  // basecase
  if (numbers.length === 0) {
    return 0;
  }
  return numbers[0] + sumNumbersRecursive(numbers.slice(1));
};

console.log(sumNumbersRecursive([10])); //--> 10
console.log(sumNumbersRecursive([10, 1, 1, 1, 20])); //--> 33
