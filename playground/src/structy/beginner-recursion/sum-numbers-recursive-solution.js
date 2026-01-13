const sumNumbersRecursive = numbers => {
  if (numbers.length === 0) {
    return 0;
  }
  return numbers[0] + sumNumbersRecursive(numbers.slice(1));
};
