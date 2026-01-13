const countElementsInArray = <T extends PropertyKey>(elements: T[]): Record<T, number> => {
  const elementCounts: Record<T, number> = {} as Record<T, number>;
  for (const element of elements) {
    elementCounts[element] = (elementCounts[element] ?? 0) + 1;
  }
  return elementCounts;
};

/**
 * Time: O(n+m) cause both arrays has to be converted to a count hash map
 * Space: O(n+m) since we need a hashmap for both the arrays
 */
export const intersectionWithDupes = (a: string[], b: string[]) => {
  const aOccurrenceCount = countElementsInArray(a);
  const bOccurrenceCount = countElementsInArray(b);
  const result: string[] = [];

  for (const element of Object.keys(aOccurrenceCount)) {
    if (!(element in bOccurrenceCount)) {
      continue;
    }
    const smallestCharCount = Math.min(aOccurrenceCount[element], bOccurrenceCount[element]);

  
    for (let i = 0; i < smallestCharCount; i += 1) {
      result.push(element);
    }
  }
  return result;
};

console.log(intersectionWithDupes(['a', 'a'], ['a', 'a'])); // ['a',]
