import { getRandomInt } from '../utils.js';

const isEven = (number) => number % 2 === 0;

const getRound = () => {
  const question = getRandomInt(1, 1000);

  const correctAnswer = isEven(question) ? 'yes' : 'no';

  return {
    question,
    correctAnswer,
  };
};

export const gameData = {
  welcomeMessage: 'Answer "yes" if the number is even, otherwise answer "no".',
  getRound,
};
