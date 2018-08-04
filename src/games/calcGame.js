import playGame from '..';
import { getRandomNumber } from '../utils';

const rule = 'What is the result of the expression?';
const min = 1;
const max = 30;

const genGameData = () => {
  const num1 = getRandomNumber(min, max);
  const num2 = getRandomNumber(min, max);
  const mathOperationGamble = getRandomNumber(0, 3);
  let operand;
  let correctAnswer;
  switch (mathOperationGamble) {
    case 0:
      correctAnswer = String(num1 * num2);
      operand = '*';
      break;
    case 1:
      correctAnswer = String(num1 + num2);
      operand = '+';
      break;
    case 2:
      correctAnswer = String(num1 - num2);
      operand = '-';
      break;
    default:
      console.log('Something went wrong.');
  }

  const questionNum = `${num1} ${operand} ${num2}`;
  return [questionNum, correctAnswer];
};

const startGame = () => playGame(genGameData, rule);

export default startGame;
