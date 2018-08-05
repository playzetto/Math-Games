import playGame from '..';
import getRandomNumber from '../utils';

const rule = 'What number is missing in this progression?';
const progressionLen = 10;
const startNum = getRandomNumber(1, 20);
const stepVal = getRandomNumber(1, 5);

const generateProgression = (progressionLength, firstNum, stepValue) => {
  const progression = [];
  for (let i = 0; i < progressionLength; i += 1) {
    progression.push(firstNum + stepValue * i);
  }
  return progression;
};

const generateQuestion = (progressionArr) => {
  const randomIndex = getRandomNumber(0, progressionArr.length - 1);
  const correctAnswer = progressionArr[randomIndex].toString();
  const copyArr = progressionArr.slice();
  copyArr[randomIndex] = '..';
  const question = copyArr.join(' ');
  return [question, correctAnswer];
};

const genGameData = () => generateQuestion(generateProgression(progressionLen, startNum, stepVal));

const startGame = () => playGame(genGameData, rule);

export default startGame;
