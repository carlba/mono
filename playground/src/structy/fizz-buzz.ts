/**
 * * Time: O(n)
 * * Space: O(n)
 */

const fizzBuzz = (n: number) => {
  const fizzBuzzes = [];

  for (let i = 1; i < n + 1; i += 1) {
    if (i % 3 === 0 && i % 5 === 0) {
      fizzBuzzes.push('fizz');
    } else if (i % 3 === 0) {
      fizzBuzzes.push('fizz');
    } else if (i % 5 === 0) {
      fizzBuzzes.push('buzz');
    } else {
      fizzBuzzes.push(i);
    }
  }
  return fizzBuzzes;
};

console.log(fizzBuzz(16));
