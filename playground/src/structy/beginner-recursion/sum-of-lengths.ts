/**
 * Time: O(n^2)
 * Space: O(n^2)
 */
export const sumOfLengths = (strings: string[]): number => {
  if (strings.length === 0) {
    return 0;
  }

  return strings[0].length + sumOfLengths(strings.slice(1));
};
