import playGame from '..';
import getRandomNumber from '../utils';

const rule = 'Balance the given number.';
const minRandNum = 100;
const maxRandNum = 1000;

const genGameData = () => {
  const question = getRandomNumber(minRandNum, maxRandNum);
  const balanceNum = () => {
    const digitsArr = String(question).split('');
    const balanceFilter = (num) => {
      num.sort();
      const maxDigit = Math.max(...num);
      const minDigit = Math.min(...num);
      if ((maxDigit - minDigit) <= 1) {
        return num.sort('').join('');
      }
      const newArray = num.slice(1, num.length - 1);
      return balanceFilter([maxDigit - 1, minDigit + 1, ...newArray]);
    };
    return balanceFilter(digitsArr);
  };
  const correctAnswer = balanceNum();
  return [question, correctAnswer];
};

const startGame = () => playGame(genGameData, rule);

export default startGame;
