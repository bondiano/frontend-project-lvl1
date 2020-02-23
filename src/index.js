import readlineSync from 'readline-sync';

import { gameLoop } from './game-loop.js';

export const run = (getGameData) => {
  console.log('Welcome to the Brain Games!');

  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);

  const { welcomeMessage, getRound } = getGameData();
  console.log(welcomeMessage);

  const buildFailMessage = (
    answer,
    correctAnswer,
  ) => `"${answer}" is wrong answer ;(. Correct answer was "${correctAnswer}".
Let's try again, ${name}!`;

  const buildSuccessMessage = () => `Congratulations, ${name}!`;

  gameLoop(getRound, buildFailMessage, buildSuccessMessage);
};
