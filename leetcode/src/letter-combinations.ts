const letterNumbers: Record<string, string> = {
  '1': '',
  '2': 'abc',
  '3': 'def',
  '4': 'ghi',
  '5': 'jkl',
  '6': 'mno',
  '7': 'pqrs',
  '8': 'tuv',
  '9': 'wxyz',
  '0': ' '
};

function letterCombinations(digits: string): string[] {
  let results: string[] = [''];
  for (const digit of digits) {
    const digitLetters = letterNumbers[digit];
    console.log({ digitLetters });

    const next: string[] = [];
    for (const combo of results) {
      for (const digitLetter of digitLetters) {
        next.push(combo + digitLetter);
      }
    }
    results = next;
  }
  return results;
}

console.log(letterCombinations('23'));
