import readlineSync from 'readline-sync';

import { runGameLoop } from './game-loop.js';

export const run = (gameData) => {
  console.log('Welcome to the Brain Games!');

  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);

  const { welcomeMessage, getRound } = gameData;
  console.log(welcomeMessage);

  const buildFailMessage = (
    answer,
    correctAnswer,
  ) => `"${answer}" is wrong answer ;(. Correct answer was "${correctAnswer}".\nLet's try again, ${name}!`;

  const buildSuccessMessage = () => `Congratulations, ${name}!`;

  runGameLoop(getRound, buildFailMessage, buildSuccessMessage);
};
