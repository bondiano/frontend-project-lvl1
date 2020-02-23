import { getRandomInt, gcd } from '../utils.js';

export const getRound = () => {
  const firstNumber = getRandomInt(1, 100);
  const secondNumber = getRandomInt(1, 100);

  const question = `Question: ${firstNumber} ${secondNumber}`;

  const checkResult = (answer) => {
    const correctAnswer = gcd(firstNumber, secondNumber);
    const isCorrect = +answer === correctAnswer;

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
  welcomeMessage: 'Find the greatest common divisor of given numbers.',
  getRound,
});
