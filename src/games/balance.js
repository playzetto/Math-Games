import playGame from '..';
import getRandomNumber from '../utils';

const rule = 'Balance the given number.';
const minRandNum = 100;
const maxRandNum = 10000;

const genGameData = () => {
  const question = getRandomNumber(minRandNum, maxRandNum);
  const questionToArr = question.toString().split('');
  const balanceNumber = (questionArr) => {
    const max = Math.max(...questionArr);
    const min = Math.min(...questionArr);
    if ((max - min) <= 1) {
      return questionArr.sort().join('');
    }
    const modifiedQustion = questionArr.slice(1, questionArr.length - 1);
    return balanceNumber([max - 1, min + 1, ...modifiedQustion]);
  };
  const correctAnswer = balanceNumber(questionToArr);
  return [question, correctAnswer];
};

const startGame = () => playGame(genGameData, rule);

export default startGame;
