import { getRandomInt, isEven } from '../utils.js';

export const getRound = () => {
  const questionNumber = getRandomInt(1, 1000);
  const question = `Question: ${questionNumber}`;

  const checkResult = (answer) => {
    const correctAnswer = isEven(questionNumber) ? 'yes' : 'no';
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
