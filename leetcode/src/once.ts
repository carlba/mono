type JSONValue = null | boolean | number | string | JSONValue[] | { [key: string]: JSONValue };
type OnceFn = (...args: JSONValue[]) => JSONValue | undefined;

function once(fn: Function): OnceFn {
  let calls: number = 1;
  return function (this: any, ...args) {
    if (calls > 1) {
      return undefined;
    }
    calls += 1;
    return fn.apply(this, args);
  };
}

let fn = (a: any, b: any, c: any) => a + b + c;
let onceFn = once(fn);

console.log(onceFn(1, 2, 3)); // 6
console.log(onceFn(2, 3, 6)); // returns undefined without calling fn
