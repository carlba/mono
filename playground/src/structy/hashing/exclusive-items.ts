export const exclusiveItems = (a: number[], b: number[]) => {
  const uniqueA = new Set(a);
  const uniqueB = new Set(b);
  const symmetricDifference = new Set();

  for (const num of a) {
    if (!uniqueB.has(num)) {
      symmetricDifference.add(num);
    }
  }

  for (const num of b) {
    if (!uniqueA.has(num)) {
      symmetricDifference.add(num);
    }
  }

  return Array.from(symmetricDifference);
};
