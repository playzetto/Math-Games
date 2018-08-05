import playGame from '..';
import getRandomNumber from '../utils';

const rule = 'What number is missing in this progression?';
const progressionLen = 10;

const generateProgression = (startNum, stepVal) => {
  const progression = [];
  for (let i = 0; i < progressionLen; i += 1) {
    progression.push(startNum + stepVal * i);
  }
  return progression;
};

const genGameData = () => {
  const startNum = getRandomNumber(1, 20);
  const stepVal = getRandomNumber(1, 5);
  const progression = generateProgression(startNum, stepVal);
  const hiddenElementPosition = getRandomNumber(0, progression.length - 1);
  const correctAnswer = progression[hiddenElementPosition].toString();
  progression[hiddenElementPosition] = '..';
  const question = progression.join(' ');
  return [question, correctAnswer];
};

const startGame = () => playGame(genGameData, rule);

export default startGame;
