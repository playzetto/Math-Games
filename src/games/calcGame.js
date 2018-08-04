import playGame from '..';
import { getRandomNumber } from '../libs/math';

const rule = 'What is the result of the expression?';
const min = 1;
const max = 30;

const logic = () => {
  const num1 = getRandomNumber(min, max);
  const num2 = getRandomNumber(min, max);
  const chooseOAction = getRandomNumber(0, 3);
  let operand;
  let correctAnswer;
  if (chooseOAction === 0) {
    correctAnswer = String(num1 * num2);
    operand = '*';
  } else if (chooseOAction === 1) {
    correctAnswer = String(num1 + num2);
    operand = '+';
  } else if (chooseOAction === 2) {
    correctAnswer = String(num1 - num2);
    operand = '-';
  }
  const questionNum = `${num1} ${operand} ${num2}`;
  return [questionNum, correctAnswer];
};

const startGame = () => playGame(logic, rule);

export default startGame;
