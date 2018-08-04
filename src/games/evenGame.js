import playGame from '..';
import { getRandomNumber, isEven } from '../libs/math';

const rule = 'Answer "yes" if number even otherwise answer "no".';
const min = 1;
const max = 30;

const logic = () => {
  const num = getRandomNumber(min, max);
  const correctAnswer = isEven(num) ? 'yes' : 'no';
  return [num, correctAnswer];
};

const startGame = () => playGame(logic, rule);

export default startGame;
