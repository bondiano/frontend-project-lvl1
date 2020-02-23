export const getRandomInt = (min, max) => Math.floor(Math.random() * (max - min + 1) + min);

export const isEven = (number) => number % 2 === 0;

/**
 * Iterative version of Euclidean Algorithm of finding greatest common divisor (GCD).
 * @param {number} originalA
 * @param {number} originalB
 * @return {number}
 */
export const gcd = (originalA, originalB) => {
  let a = Math.abs(originalA);
  let b = Math.abs(originalB);

  while (a && b && a !== b) {
    [a, b] = a > b ? [a - b, b] : [a, b - a];
  }

  return a || b;
};
