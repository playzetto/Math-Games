import readlineSync from 'readline-sync';
// Определения на уровне модуля
const numberOfQuestions = 3;
const welcomeMessage = rule => console.log(`Welcome to Brain Games!\n${rule}`);

const initGame = (playRound, rule) => {
  welcomeMessage(rule);
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

export default initGame;
