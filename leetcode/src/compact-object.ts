type JSONValue = null | boolean | number | string | JSONValue[] | { [key: string]: JSONValue };
type Obj = Record<string, JSONValue> | Array<JSONValue>;
/**
 * By returning early for primitive types the main loop got simplified. I kept the compactObject
 * function to keep the contract with leetcode.
 */
function compactJsonValue(obj: JSONValue): JSONValue {
  if (Array.isArray(obj)) return obj.filter(Boolean).map(compactJsonValue);
  if (typeof obj !== 'object' || obj === null) return obj;

  return Object.fromEntries(
    Object.entries(obj)
      .filter(([, value]) => Boolean(value))
      .map(([key, value]) => [key, compactJsonValue(value)])
  );
}

function compactObject(obj: Obj) {
  return compactJsonValue(obj);
}

const unCompactedObject = { a: ['test', false, null, 0] };

console.log(compactObject(unCompactedObject));
