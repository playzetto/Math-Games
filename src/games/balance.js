import playGame from '..';
import getRandomNumber from '../utils';

const rule = 'Balance the given number.';
const minRandNum = 100;
const maxRandNum = 1000;

const genGameData = () => {
  const question = getRandomNumber(minRandNum, maxRandNum);
  let questionToArr = question.toString().split('').sort();
  let correctAnswer = '';
  while (correctAnswer === '') {
    const maxNum = Math.max(...questionToArr);
    const minNum = Math.min(...questionToArr);
    if ((maxNum - minNum) <= 1) {
      correctAnswer = questionToArr.sort().join('');
    }
    questionToArr = questionToArr.sort().slice(1, questionToArr.length - 1);
    questionToArr.push(maxNum - 1);
    questionToArr.push(minNum + 1);
  }
  /*
  const balanceNumber = (questionArr) => {
    const max = Math.max(...questionArr);
    const min = Math.min(...questionArr);
    if ((max - min) <= 1) {
      return questionArr;
    }
    const modifiedQustion = questionArr.slice(1, questionArr.length - 1);
    return balanceNumber([max - 1, min + 1, ...modifiedQustion].sort());
  };
  */
  return [question, correctAnswer];
};

const startGame = () => playGame(genGameData, rule);

export default startGame;
