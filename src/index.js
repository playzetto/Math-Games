import readlineSync from 'readline-sync';

// Определения на уровне модуля
const numberOfQuestions = 3;
const welcomeMessage = 'Welcome to Brain Games!';
const evenRule = 'Answer "yes" if number even otherwise answer "no".';

const startGame = (playRound) => {
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

export default startGame;
