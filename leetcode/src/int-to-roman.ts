const intToNumerals: [number, string][] = [
  [1000, 'M'],
  [900, 'CM'],
  [500, 'D'],
  [400, 'CD'],
  [100, 'C'],
  [90, 'XC'],
  [50, 'L'],
  [40, 'XL'],
  [10, 'X'],
  [9, 'IX'],
  [5, 'V'],
  [4, 'IV'],
  [1, 'I'],
];

function intToRoman(num: number): string {
  let roman = '';
  if (num === 0) return roman;
  for (const [value, numeral] of intToNumerals) {
    const count = Math.floor(num / value);
    if (count === 0) continue;

    roman += numeral.repeat(count);
    num -= value * count;
  }
  return roman;
}

console.log(intToRoman(3749));
