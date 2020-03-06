import readlineSync from 'readline-sync';

const ROUNDS_COUNT = 3;

export const runGameLoop = (
  getRound,
  buildFailMessage,
  buildSuccessMessage,
) => {
  for (let i = 0; i < ROUNDS_COUNT; i += 1) {
    const { question, correctAnswer } = getRound();
    console.log(`Question: ${question}`);

    const answer = readlineSync.question('Your answer: ');

    if (answer !== correctAnswer) {
      const message = buildFailMessage(answer, correctAnswer);
      console.log(message);
      return;
    }
  }

  const message = buildSuccessMessage();
  console.log(message);
};
