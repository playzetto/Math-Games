import readlinesync from 'readline-sync';
import { getRandomNumber } from '../math';
import playGame from '..';

const rule = 'What is the result of the expression?';

const logic = () => {
  const min = 1;
  const max = 30;
  const riddleNum1 = getRandomNumber(min, max);
  const riddleNum2 = getRandomNumber(min, max);
  const actionDefiner = Math.floor(Math.random() * Math.floor(3));
  let correctAnswer;
  if (actionDefiner === 2) {
    console.log(`Question: ${riddleNum1} * ${riddleNum2}`);
    correctAnswer = riddleNum1 * riddleNum2;
  } else if (actionDefiner === 1) {
    console.log(`Question: ${riddleNum1} + ${riddleNum2}`);
    correctAnswer = riddleNum1 + riddleNum2;
  } else if (actionDefiner === 0) {
    console.log(`Question: ${riddleNum1} - ${riddleNum2}`);
    correctAnswer = riddleNum1 - riddleNum2;
  }

  const userAnswer = readlinesync.questionInt('Your answer : ');
  return [userAnswer, correctAnswer];
};

const startGame = () => playGame(logic, rule);

export default startGame;
