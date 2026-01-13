const str = 'testing';

const reverseString = (str: string) => {
  let reversed = '';
  for (let i = str.length - 1; i >= 0; i -= 1) {
    reversed += str[i];
  }
  return reversed;
};

const reverseStringPerformant = (str: string) => {
  const reversed = [];
  for (let i = str.length - 1; i >= 0; i -= 1) {
    reversed.push(str[i]);
  }
  return reversed.join('');
};

console.log(reverseString(str));
console.log(str.split('').reverse().join(''));
console.log(reverseStringPerformant(str));

const onlyEqualValues = <T>(values: T[]): boolean => {
  return new Set(values).size <= 1;
};

console.log(onlyEqualValues([1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, '1']));
