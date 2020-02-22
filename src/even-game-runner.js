import readlineSync from 'readline-sync';
import { getRandomInt, isEven } from './utils.js';

const ROUNDS_COUNT = 3;

const gameLoop = (name) => {
  const buildWrongAnswerMessage = (
    answer,
    correctAnswer,
  ) => `"${answer}" is wrong answer ;(. Correct answer was "${correctAnswer}".
Let's try again, ${name}!`;

  for (let i = 0; i < ROUNDS_COUNT; i += 1) {
    const questionNumber = getRandomInt(1, 1000);
    console.log(`Question: ${questionNumber}`);

    const answer = readlineSync.question('Your answer: ');

    if (isEven(questionNumber) && answer !== 'yes') {
      const message = buildWrongAnswerMessage(answer, 'yes');
      console.log(message);
      return;
    }

    if (!isEven(questionNumber) && answer !== 'no') {
      const message = buildWrongAnswerMessage(answer, 'no');
      console.log(message);
      return;
    }
  }

  console.log(`Congratulations, ${name}!`);
};

export const evenGameRunner = ({ name }) => {
  console.log('Answer "yes" if the number is even, otherwise answer "no".');
  gameLoop(name);
};
