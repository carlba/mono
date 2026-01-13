/**
 * Can only be divisible by one or itself.
 *
 * We can check if a number is divisible by another one by using modulus, like so:
 *
 * ```typescript
 * possiblePrime % 2 === 0 // possiblePrime is evenly divisible by 2
 * ```
 *
 * There is one caveat which is that we need to handle the case where the users passes in an
 * argument of 1 which can never be a prime number. We can handle this by simply returning early
 * from the function in this case
 *
 * @param possiblePrime  Possible prime number.
 */
const isPrime = (possiblePrime: number) => {
  if (possiblePrime === 1) {
    return false;
  }

  for (let i = 2; i < possiblePrime; i += 1) {
    if (possiblePrime % i === 0) {
      return false;
    }
  }
  return true;
};

console.log(isPrime(7));
