const isInArray = <T, A extends T>(item: T, array: readonly A[]): item is A =>
  array.includes(item as A);

export function pick<O extends object, T extends keyof O>(obj: O, keys: T[]): Pick<O, T> {
  const pickedObject = keys.reduce(
    (acc, key) => {
      if (obj[key] !== undefined) {
        acc[key] = obj[key];
      }
      return acc;
    },
    {} as Pick<O, T>
  );

  return pickedObject;
}

export function omit<O extends object, K extends keyof O>(obj: O, keys: K[]): Omit<O, K> {
  const objKeys = Object.keys(obj) as K[];

  return objKeys.reduce<Omit<O, K>>(
    (result, key) => {
      if (!isInArray(key, keys)) {
        result[key] = obj[key];
      }
      return result;
    },
    {} as Omit<O, K>
  );
}

Array.from(new Set([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));
