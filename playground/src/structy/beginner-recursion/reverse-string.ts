/**
 * Recursively sum all numbers in an array
 *
 * Time: O(n^2)
 * Space: O(n^2)
 */
export const reverseString = (str: string): string => {
  if (str.length === 0) {
    return '';
  }
  return reverseString(str.slice(1)) + str.at(0);
};
