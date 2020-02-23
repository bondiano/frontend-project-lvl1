import { getRandomInt, isEven } from '../utils.js';

export const getRound = () => {
  const question = getRandomInt(1, 1000);

  const checkResult = (answer) => {
    const correctAnswer = isEven(question) ? 'yes' : 'no';
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
  welcomeMessage: 'Answer "yes" if the number is even, otherwise answer "no".',
  getRound,
});
