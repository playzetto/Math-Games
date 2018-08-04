import playGame from '..';
import { getRandomNumber, findGCD } from '../libs/math';

const rule = 'Find the greatest common divisor of given numbers.';
const min = 1;
const max = 30;

const logic = () => {
  const num1 = getRandomNumber(min, max);
  const num2 = getRandomNumber(min, max);
  const correctAnswer = String(findGCD(num1, num2));
  const question = `${num1} ${num2}`;
  return [question, correctAnswer];
};

const startGame = () => playGame(logic, rule);

export default startGame;
