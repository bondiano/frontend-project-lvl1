import readlineSync from 'readline-sync';

const ROUNDS_COUNT = 3;

export const gameLoop = (
  getRound,
  buildFailMessage,
  buildSuccessMessage,
) => {
  for (let i = 0; i < ROUNDS_COUNT; i += 1) {
    const { question, checkResult } = getRound();
    console.log(question);

    const answer = readlineSync.question('Your answer: ');

    const { isCorrect, correctAnswer } = checkResult(answer);

    if (!isCorrect) {
      const message = buildFailMessage(answer, correctAnswer);
      console.log(message);
      return;
    }
  }

  const message = buildSuccessMessage();
  console.log(message);
};
