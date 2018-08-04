import playGame from '..';
import getRandomNumber from '../utils';

const rule = 'What number is missing in this progression?';
const lengthOfProgression = 10;
const startRange = [1, 20];
const stepRange = [1, 5];

const genGameData = () => {
  const generateProgression = () => {
    const progression = [];
    progression.push(getRandomNumber(startRange[0], startRange[1]));
    const progressionStepRange = getRandomNumber(stepRange[0], stepRange[1]);
    for (let i = 0; i < lengthOfProgression; i += 1) {
      progression.push(progression[i] + progressionStepRange);
    }
    return progression;
  };

  const hideElement = (progressionArr) => {
    const randomIndex = getRandomNumber(0, progressionArr.length - 1);
    const correctAnswer = progressionArr[randomIndex].toString();
    const copyArr = progressionArr;
    copyArr[randomIndex] = '..';
    const question = copyArr.join(' ');
    return [question, correctAnswer];
  };
  return hideElement(generateProgression());
};

const startGame = () => playGame(genGameData, rule);

export default startGame;
