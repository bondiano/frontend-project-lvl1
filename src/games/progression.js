import { getRandomInt } from '../utils.js';

const PROGRESSION_LENGTH = 10;

const genProgression = (startNumber, diff) => {
  const result = [];

  for (let i = 0; i < PROGRESSION_LENGTH; i += 1) {
    // a(n) = a(1) + d * (n - 1)
    const element = startNumber + diff * i;
    result.push(element);
  }

  return result;
};

const getRound = () => {
  const startNumber = getRandomInt(1, 100);
  const diff = getRandomInt(1, 10);

  const hiddenNumberIndex = getRandomInt(0, PROGRESSION_LENGTH - 1);

  const progression = genProgression(startNumber, diff);

  const hiddenNumber = progression[hiddenNumberIndex];

  const question = progression.reduce(
    (acc, num, index) => `${acc} ${index === hiddenNumberIndex ? '..' : num}`,
  );

  return {
    question,
    correctAnswer: String(hiddenNumber),
  };
};

export const gameData = {
  welcomeMessage: 'What number is missing in the progression?',
  getRound,
};
