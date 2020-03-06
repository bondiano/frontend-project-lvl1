import { getRandomInt } from '../utils.js';

const isPrime = (num) => {
  if (num < 1) {
    return false;
  }

  for (let i = 2, sqrt = Math.sqrt(num); i <= sqrt; i += 1) {
    if (num % i === 0) {
      return false;
    }
  }

  return true;
};

const getRound = () => {
  const question = getRandomInt(1, 1000);

  const correctAnswer = isPrime(question) ? 'yes' : 'no';

  return {
    question,
    correctAnswer,
  };
};

export const gameData = {
  welcomeMessage: 'Answer "yes" if given number is prime. Otherwise answer "no".',
  getRound,
};
