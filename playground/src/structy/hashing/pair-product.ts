/**
 * @see file://./README.md#pair-product
 */
const pairProduct = (numbers: number[], targetProduct: number) => {
  const previous: Record<number, number> = {};

  for (let i = 0; i < numbers.length; i += 1) {
    const number = numbers[i];
    const previousIndex = previous[targetProduct / number];
    if (previousIndex) {
      return [i, previousIndex];
    }
    previous[number] = i;
  }
};

console.log(pairProduct([3, 2, 5, 4, 1], 8));
