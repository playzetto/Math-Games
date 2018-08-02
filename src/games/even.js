import readlineSync from 'readline-sync';
import gameInit from '..';
// Определения на уровне модуля
const isEven = num => num % 2 === 0;
const getRandomNumber = () => Math.floor(Math.random() * 30);
const welcomeMessage = () => console.log('Welcome to Brain Games!\nAnswer "yes" if number even otherwise answer "no".');

const playRound = () => {
  const question = getRandomNumber();
  console.log(`\nQuestion: ${question}`);
  const answer = readlineSync.question('Your answer: ');
  const rightAnswer = isEven(question) ? 'yes' : 'no';
  if (answer === rightAnswer) {
    return true;
  }
  console.log(`'${answer}' is wrong answer ;(. Correct answer was '${rightAnswer}'.`);
  return false;
};
const launchGame = () => gameInit(playRound, welcomeMessage);
export default launchGame;
