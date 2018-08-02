import readlineSync from 'readline-sync';
import { cons, car, cdr } from 'hexlet-pairs';
// Определения на уровне модуля
const getRandomNumber = () => Math.floor(Math.random() * 30);

const playRound = () => {
  const questionPair = cons(getRandomNumber(), getRandomNumber());
  // Math.floor(3) - тройка, так как мы рассматриваем 3 вычислительных операции
  const actionDefiner = Math.floor(Math.random() * Math.floor(3));
  let rightAnswer;
  if (actionDefiner === 2) {
    console.log(`Question: ${car(questionPair)} * ${cdr(questionPair)}`);
    rightAnswer = car(questionPair) * cdr(questionPair);
  } else if (actionDefiner === 1) {
    console.log(`Question: ${car(questionPair)} + ${cdr(questionPair)}`);
    rightAnswer = car(questionPair) + cdr(questionPair);
  } else if (actionDefiner === 0) {
    console.log(`Question: ${car(questionPair)} - ${cdr(questionPair)}`);
    rightAnswer = car(questionPair) - cdr(questionPair);
  }
  const answer = readlineSync.questionInt('Your answer: ');
  if (answer === rightAnswer) {
    return true;
  }
  console.log(`'${answer}' is wrong answer ;(. Correct answer was '${rightAnswer}'.`);
  return false;
};

export default playRound;
