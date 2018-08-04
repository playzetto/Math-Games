import readlinesync from 'readline-sync';
import { getRandomNumber, isEven } from '../math';
import playGame from '..';

const rule = 'Answer "yes" if number even otherwise answer "no".';

const logic = () => {
  const min = 1;
  const max = 30;
  const riddleNum = getRandomNumber(min, max);
  const correctAnswer = isEven(riddleNum) ? 'yes' : 'no';
  console.log(`Question : ${riddleNum}`);
  const userAnswer = readlinesync.question('Your answer : ');
  return [userAnswer, correctAnswer, riddleNum];
};

const startGame = () => playGame(logic, rule);

export default startGame;
