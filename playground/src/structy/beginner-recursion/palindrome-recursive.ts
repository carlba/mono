/**
 * Validate if a string is a palindrome
 *
 * Time: O(n^2)
 * Space: O(n^2)
 */
export const palindrome = (str: string): boolean => {
  if (str.length <= 1) {
    return true;
  }

  if (!(str.at(0) === str.at(-1))) {
    return false;
  }

  return palindrome(str.slice(1, -1));
};
