import readlineSync from 'readline-sync';
import playRound from './games/calc';
// Определения на уровне модуля
const numberOfQuestions = 3;
const welcomeText = 'Welcome to Brain Games!\nWhat is the result of the expression?';
const welcomeMessage = () => console.log(welcomeText);

const startGame = () => {
  welcomeMessage();
  const userName = readlineSync.question('\nMay I have your name? ');
  console.log(`Hello, ${userName}`);
  //  Asking question
  for (let i = 0; i < numberOfQuestions; i += 1) {
    const isWinRound = playRound();
    if (!isWinRound) {
      console.log(`\nLet's try again, ${userName}!`);
      return;
    }
    console.log('Correct!');
  }
  console.log(`\nCongratulations, ${userName}!`);
};

export default startGame;
