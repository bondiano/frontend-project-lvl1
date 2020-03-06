import { getRandomInt } from '../utils.js';

/**
 * Iterative version of Euclidean Algorithm of finding greatest common divisor (GCD).
 * @param {number} originalA
 * @param {number} originalB
 * @return {number}
 */
const gcd = (originalA, originalB) => {
  let a = Math.abs(originalA);
  let b = Math.abs(originalB);

  while (a && b && a !== b) {
    [a, b] = a > b ? [a - b, b] : [a, b - a];
  }

  return a || b;
};

const getRound = () => {
  const firstNumber = getRandomInt(1, 100);
  const secondNumber = getRandomInt(1, 100);

  const question = `${firstNumber} ${secondNumber}`;

  const correctAnswer = String(gcd(firstNumber, secondNumber));

  return {
    question,
    correctAnswer,
  };
};

export const gameData = {
  welcomeMessage: 'Find the greatest common divisor of given numbers.',
  getRound,
};
