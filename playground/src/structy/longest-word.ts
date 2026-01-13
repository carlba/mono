const longestWord = (sentence: string) => {
  let longest = '';
  const words = sentence.split(' ');

  for (const word of words) {
    if (word.length > longest.length) {
      longest = word;
    }
  }
  return longest;
};

console.info(longestWord('Testar att skriva lite gran'));
