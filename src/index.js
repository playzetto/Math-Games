import readlineSync from 'readline-sync';
// Определения на уровне модуля
const numberOfQuestions = 3;
const welcomeMessage = ('Welcome to Brain Games!');
const evenRule = 'Answer "yes" if number even otherwise answer "no".';
const isEven = num => num % 2 === 0;

const playRound = () => {
  const question = Math.floor(Math.random() * 30);
  console.log(`\nQuestion: ${question}`);
  const answer = readlineSync.question('Your answer: ');
  const rightAnswer = isEven(question) ? 'yes' : 'no';
  if (answer === rightAnswer) {
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
    const isWinRound = playRound();
    if (!isWinRound) {
      console.log(`\nLet's try again, ${userName}!`);
      return;
    }
  }
  console.log(`\nCongratulations, ${userName}!`);
};

export default startGame;
