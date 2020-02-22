import readlineSync from 'readline-sync';

import { noop } from './utils.js';

export const run = (gameRunner = noop) => {
  console.log('Welcome to the Brain Games!');

  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);

  gameRunner({ name });
};
