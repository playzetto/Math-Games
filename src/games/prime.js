import playGame from '..';
import getRandomNumber from '../utils';

const rule = 'Is this number prime? ';
const min = 1;
const max = 30;

const isPrime = (num) => {
  const starterDiv = 2;
  if (num === 1 || num < 0) {
    return false;
  }
  const iter = (div) => {
    if (div > num / 2) {
      return true;
    }
    if (div * div <= num && num % div === 0) {
      return false;
    }
    return iter(num, div + 1);
  };
  return iter(starterDiv);
};

const genGameData = () => {
  const question = getRandomNumber(min, max);
  const correctAnswer = isPrime(question) ? 'yes' : 'no';
  return [question, correctAnswer];
};

const startGame = () => playGame(genGameData, rule);

export default startGame;
