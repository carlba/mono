/**
 * Return the n-th number of the fibonacci sequence
 *
 * Time: O(2^n)
 * Space: O(n)
 */
export const fibonacci = (num: number): number => {
  if (num === 1) {
    return 1;
  }

  if (num === 0) {
    return 0;
  }

  return fibonacci(num - 1) + fibonacci(num - 2);
};
