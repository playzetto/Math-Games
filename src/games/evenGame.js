import { isEven, getRandomNumber } from '../math';

const rule = 'Answer "yes" if number even otherwise answer "no".';
const questionIs = getRandomNumber(0, 30);

const alghorithm = (userAnswer) => {
  const correctAnswer = isEven(questionIs);
  return (userAnswer === correctAnswer);
};

export default alghorithm;
