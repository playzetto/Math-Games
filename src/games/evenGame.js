import playGame from '..';
import getRandomNumber from '../utils';

const rule = 'Answer "yes" if number even otherwise answer "no".';
const isEven = num => num % 2 === 0;
const min = 1;
const max = 30;

const genGameData = () => {
  const question = getRandomNumber(min, max);
  const correctAnswer = isEven(question) ? 'yes' : 'no';
  return [question, correctAnswer];
};

const startGame = () => playGame(genGameData, rule);

export default startGame;
