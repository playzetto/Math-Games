import playGame from '..';
import getRandomNumber from '../utils';

const rule = 'Is this number prime? ';
const min = 1;
const max = 30;

const isPrime = (num) => {
  const iter = (numToCheck, div) => {
    if (numToCheck === 1 || numToCheck === 2 || numToCheck % div === 0) {
      return false;
    }
    if (div > numToCheck / 2) {
      return true;
    }
    return iter(numToCheck, div + 1);
  };
  return iter(num, 2);
};

const genGameData = () => {
  const question = getRandomNumber(min, max);
  const correctAnswer = isPrime(question) ? 'yes' : 'no';
  return [question, correctAnswer];
};

const startGame = () => playGame(genGameData, rule);

export default startGame;
