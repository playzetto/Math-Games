import playGame from '..';
import getRandomNumber from '../utils';

const rule = 'Is this number prime? ';
const min = 1;
const max = 30;

const isPrime = (num) => {
  if (num < 2 || (num % 2 === 0 && num !== 2)) {
    return false;
  }
  const maxDiv = Math.round(Math.sqrt(num)) + 1;
  for (let i = 3; i < maxDiv; i += 2) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
};

const genGameData = () => {
  const question = 9;
  const correctAnswer = isPrime(question) ? 'yes' : 'no';
  return [question, correctAnswer];
};

const startGame = () => playGame(genGameData, rule);

export default startGame;
