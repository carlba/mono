const pairSum = (numbers, targetSum) => {
  const previousNumbers = {};

  for (let i = 0; i < numbers.length; i += 1) {
    const number = numbers[i];
    const previousIndex = previousNumbers[targetSum - number];
    if (previousIndex !== undefined) {
      return [i, previousIndex];
    }
    previousNumbers[number] = i;
  }
};

console.log(pairSum([3, 2, 5, 4, 1], 8));
