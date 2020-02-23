import { getRandomInt, genProgression } from '../utils.js';

const ELEMENTS_COUNT = 10;

export const getRound = () => {
  const startNumber = getRandomInt(1, 100);
  const d = getRandomInt(1, 10);

  const hiddenIndex = getRandomInt(0, ELEMENTS_COUNT - 1);

  const progressionArr = genProgression(startNumber, d, ELEMENTS_COUNT);

  const hiddenNumber = progressionArr[hiddenIndex];

  const question = progressionArr.reduce(
    (acc, num, index) => `${acc} ${index === hiddenIndex ? '..' : num}`,
  );

  const checkResult = (answer) => {
    const isCorrect = +answer === hiddenNumber;

    return {
      isCorrect,
      correctAnswer: hiddenNumber,
    };
  };

  return {
    question,
    checkResult,
  };
};

export const getGameData = () => ({
  welcomeMessage: 'What number is missing in the progression?',
  getRound,
});
