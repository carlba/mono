const maxValue = (nums: number[]) => {
  let maximum = -Infinity;

  for (const num of nums) {
    if (num > maximum) {
      maximum = num;
    }
  }
  return maximum;
};

console.log(maxValue([10, 12, 15, 5]));
