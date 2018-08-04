import playGame from '..';
import { getRandomNumber, getNumberBalanced } from '../utils';

const rule = 'Balance the given number.';
const min = 100;
const max = 1000;

const genGameData = () => {
  const getResult = (funcBalance, funcGetNum) => {
    const question = String(funcGetNum(min, max));
    const correctAnswer = funcBalance(question.split('')).join('');
    return [question, correctAnswer];
  };

  return getResult(getNumberBalanced, getRandomNumber);
};

const startGame = () => playGame(genGameData, rule);

export default startGame;
