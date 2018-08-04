import { getRandomNumber, playGame } from '..';

const rule = 'What is the result of the expression?';

const logic = () => {
  const min = 1;
  const max = 30;
  const add = (num1, num2) => [`${num1} + ${num2}`, String(num1 + num2)];
  const sub = (num1, num2) => [`${num1} - ${num2}`, String(num1 - num2)];
  const div = (num1, num2) => [`${num1} * ${num2}`, String(num1 * num2)];
  const num1 = getRandomNumber(min, max);
  const num2 = getRandomNumber(min, max);
  const funcArray = [
    add(num1, num2),
    sub(num1, num2),
    div(num1, num2),
  ];
  return funcArray[getRandomNumber(0, 3)];
};

const startGame = () => playGame(logic, rule);

export default startGame;
