/**
 * Time: O(n+m)
 * Space: O(m)
 */
export const anagrams = (str1: string, str2: string) => {
  const anagramCount: Record<string, number> = {};

  for (const char of str1) {
    !anagramCount[char] ? (anagramCount[char] = 1) : (anagramCount[char] += 1);
  }

  for (const char of str2) {
    if (anagramCount[char]) {
      anagramCount[char] -= 1;
    } else {
      return false;
    }
  }

  const isEqual = Object.values(anagramCount).every(count => count === 0);

  return isEqual;
};

console.log(anagrams('cchair', 'aiccr'));
