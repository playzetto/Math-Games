import readlineSync from 'readline-sync';
import { cons, car, cdr } from 'hexlet-pairs';
// Определения на уровне модуля
const numberOfQuestions = 3;
const welcomeMessage = 'Welcome to Brain Games!';
const evenRule = 'Answer "yes" if number even otherwise answer "no".';
const correctMessage = 'Correct!';
// const isEven = num => num % 2 === 0;
const getRandomNumber = () => Math.floor(Math.random() * 30);
/*
const playRound = () => {
  const question = getRandomNumber();
  console.log(`\nQuestion: ${question}`);
  const answer = readlineSync.question('Your answer: ');
  const rightAnswer = isEven(question) ? 'yes' : 'no';
  if (answer === rightAnswer) {
    console.log(correctMessage);
    return true;
  }
  console.log(`'${answer}' is wrong answer ;(. Correct answer was '${rightAnswer}'.`);
  return false;
};
*/
const playCalcRound = () => {
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
    console.log(correctMessage);
    return true;
  }
  console.log(`'${answer}' is wrong answer ;(. Correct answer was '${rightAnswer}'.`);
  return false;
};


const startGame = () => {
  console.log(welcomeMessage);
  console.log(evenRule);
  const userName = readlineSync.question('\nMay I have your name? ');
  console.log(`Hello, ${userName}`);
  //  Asking question
  for (let i = 0; i < numberOfQuestions; i += 1) {
    const isWinRound = playCalcRound();
    if (!isWinRound) {
      console.log(`\nLet's try again, ${userName}!`);
      return;
    }
  }
  console.log(`\nCongratulations, ${userName}!`);
};

/*
const startGame = () => {
  console.log(welcomeMessage);
  console.log(evenRule);
  const userName = readlineSync.question('\nMay I have your name? ');
  console.log(`Hello, ${userName}`);
  //  Asking question
  for (let i = 0; i < numberOfQuestions; i += 1) {
    const isWinRound = playRound();
    if (!isWinRound) {
      console.log(`\nLet's try again, ${userName}!`);
      return;
    }
  }
  console.log(`\nCongratulations, ${userName}!`);
};
*/
export default startGame;
