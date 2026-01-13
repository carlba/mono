const intersection = (a: number[], b: number[]) => {
  const occurrences = new Set(a);

  const result: number[] = [];
  for (const num of new Set(b)) {
    if (occurrences.has(num)) {
      result.push(num);
    }
  }
  return result;
};

/**
 * Time: O(a*b) cause we need to iterate over every combination of a and b
 * Space O(min(a,b)) cause the occupying space will be less then the two arrays
 */
const intersectionIterative = (a: number[], b: number[]) => {
  const intersection = new Set(); // Could also be an array but set deduplicates

  for (const aNumber of a) {
    for (const bNumber of b) {
      if (aNumber === bNumber) {
        intersection.add(aNumber);
      }
    }
  }
  return Array.from(intersection);
};

console.log(intersection([4, 2, 1, 6], [3, 6, 9, 2, 10]));

console.log(intersectionIterative([4, 2, 1, 6], [3, 6, 9, 2, 10]));
