import playGame from '..';
import getRandomNumber from '../utils';

const rule = 'Is this number prime? ';
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
const min = 1;
const max = 30;

const genGameData = () => {
  const question = getRandomNumber(min, max);
  const correctAnswer = isPrime(question) ? 'yes' : 'no';
  return [question, correctAnswer];
};

const startGame = () => playGame(genGameData, rule);

export default startGame;

/*
const isPrime = (num) => {
  const divider = 2;
  const iter = (numSymbol, div) => {
    if (numSymbol === 1 || (div * div <= numSymbol && numSymbol % div === 0)) {
      return false;
    }
    if (div > numSymbol / 2) {
      return true;
    }
    return iter(numSymbol, div + 1);
  };
  return iter(num, divider);
};
*/
