type Fn = (...params: any[]) => Promise<any>;

function timeLimit(fn: Fn, t: number): Fn {
  return async function (this: any, ...args) {
    return Promise.race([
      fn.apply(this, args),
      new Promise((_, reject) => setTimeout(() => reject('Time Limit Exceeded'), t)),
    ]);
  };
}

const limited = timeLimit(t => new Promise(res => setTimeout(res, 200)), 200);
limited().catch(console.log); // "Time Limit Exceeded" at t=100ms
