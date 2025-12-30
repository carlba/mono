function longestCommonPrefix(strings: string[]): string {
  if (strings.length === 0) return '';

  // Start from the shortest string to minimize trimming work
  let prefix = strings.reduce(
    (shortest, current) => (current.length < shortest.length ? current : shortest),
    strings[0]
  );

  for (const str of strings) {
    while (!str.startsWith(prefix)) {
      prefix = prefix.slice(0, -1);
      if (prefix === '') return '';
    }
  }
  return prefix;
}

const strs = ['flower', 'flow', 'flight'];

console.log(longestCommonPrefix(strs));
