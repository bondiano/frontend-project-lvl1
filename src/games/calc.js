import { getRandomInt } from '../utils.js';

const operators = ['+', '-', '*'];

const actionByOperator = {
  '+': (a, b) => a + b,
  '-': (a, b) => a - b,
  '*': (a, b) => a * b,
};

const getRound = () => {
  const firstNumber = getRandomInt(1, 100);
  const secondNumber = getRandomInt(1, 100);
  const operator = operators[getRandomInt(0, 2)];
  const question = `${firstNumber} ${operator} ${secondNumber}`;

  const checkResult = (answer) => {
    const correctAnswer = actionByOperator[operator](firstNumber, secondNumber);
    const isCorrect = correctAnswer === +answer;

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
  welcomeMessage: 'What is the result of the expression?',
  getRound,
});
