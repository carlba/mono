const numeralToInts = new Map<string, number>([
  ['I', 1],
  ['V', 5],
  ['X', 10],
  ['L', 50],
  ['C', 100],
  ['D', 500],
  ['M', 1000]
]);

function romanToInt(s: string): number {
  return s.split('').reduce((total, curr, index, arr) => {
    const current = numeralToInts.get(curr);
    const next = numeralToInts.get(arr[index + 1]);

    if (!current) {
      throw new Error(`Invalid numerals ${curr}`);
    }
    total = next && current < next ? total - current : current + total;
    return total;
  }, 0);
}

console.log(romanToInt('MCMXCIV'));
