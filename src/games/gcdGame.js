import playGame from '..';
import getRandomNumber from '../utils';

const rule = 'Find the greatest common divisor of given numbers.';
const min = 1;
const max = 30;
const findGCD = (num1, num2) => {
  if (!num2) {
    return num1;
  }
  return findGCD(num2, num1 % num2);
};

const genGameData = () => {
  const num1 = getRandomNumber(min, max);
  const num2 = getRandomNumber(min, max);
  const correctAnswer = String(findGCD(num1, num2));
  const question = `${num1} ${num2}`;
  return [question, correctAnswer];
};

const startGame = () => playGame(genGameData, rule);

export default startGame;
