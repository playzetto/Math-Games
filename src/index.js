import readlineSync from 'readline-sync';

// Определения на уровне модуля
const numberOfQuestions = 3;

const startGame = (playRound, welcomeMessage) => {
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
  }
  console.log(`\nCongratulations, ${userName}!`);
};

export default startGame;
