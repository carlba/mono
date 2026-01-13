/**
 * Write a function, mostFrequentChar, that takes in a string as an argument. The function should
 * return the most frequent character of the string. If there are ties, return the character that
 * appears earlier in the string.
 *
 * You can assume that the input string is non-empty.
 */
const mostFrequentChar = (str: string) => {
  const charCounts: Record<string, number> = {};
  for (const char of str) {
    if (!charCounts[char]) {
      charCounts[char] = 1;
    } else {
      charCounts[char] += 1;
    }
  }

  // This works but can cause ordering issues
  // for (const [key, value] of Object.entries(charCounts)) {
  //   if (value > highestCount[1]) {
  //     highestCount = [key, value];
  //   }
  // }

  let highestChar: string | null = null;
  for (let char of str) {
    if (highestChar === null || charCounts[char] > charCounts[highestChar]) {
      highestChar = char;
    }
  }

  return highestChar;
};

console.log(mostFrequentChar('asdfasdffjjjddaaaaaaaa'));
