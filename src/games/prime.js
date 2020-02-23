import { getRandomInt, isPrime } from '../utils.js';

export const getRound = () => {
  const question = getRandomInt(1, 1000);

  const checkResult = (answer) => {
    const correctAnswer = isPrime(question) ? 'yes' : 'no';
    const isCorrect = answer === correctAnswer;

    return {
      isCorrect,
      correctAnswer,
    };
  };

  return {
    question,
    checkResult,
  };
};

export const getGameData = () => ({
  welcomeMessage: 'Answer "yes" if given number is prime. Otherwise answer "no".',
  getRound,
});
