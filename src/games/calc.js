import { getRandomInt } from '../utils.js';

const actionByOperator = {
  '+': (a, b) => a + b,
  '-': (a, b) => a - b,
  '*': (a, b) => a * b,
};

const operators = Object.keys(actionByOperator);

const getRound = () => {
  const firstNumber = getRandomInt(1, 100);
  const secondNumber = getRandomInt(1, 100);
  const operator = operators[getRandomInt(0, operators.length - 1)];
  const question = `${firstNumber} ${operator} ${secondNumber}`;

  const correctAnswer = String(actionByOperator[operator](firstNumber, secondNumber));

  return {
    question,
    correctAnswer,
  };
};

export const gameData = {
  welcomeMessage: 'What is the result of the expression?',
  getRound,
};
