import readlineSync from 'readline-sync';

const askQuestion = () => {
  const question = Math.floor(Math.random() * 30);
  console.log(`\nQuestion: ${question}`);
  const answer = readlineSync.question('Your answer: ');
  const isEven = (num) => {
    if (num % 2 === 0) {
      return true;
    }
    return false;
  };
  const rightAnswer = isEven(question) ? 'yes' : 'no';
  if (answer === rightAnswer) {
    return true;
  }
  console.log(`'${answer}' is wrong answer ;(. Correct answer was '${rightAnswer}'.`);
  return false;
};

const startGame = () => {
  const welcomeMessage = ('Welcome to Brain Games!');
  const evenRule = 'Answer "yes" if number even otherwise answer "no".';
  console.log(welcomeMessage);
  console.log(evenRule);
  const userName = readlineSync.question('\nMay I have your name? ');
  console.log(`Hello, ${userName}`);
  //  Asking question
  const numberOfQuestions = 3;
  for (let i = 0; i < numberOfQuestions; i += 1) {
    if (!askQuestion()) {
      console.log(`\nLet's try again, ${userName}!`);
      return;
    }
  }
  console.log(`\nCongratulations, ${userName}!`);
};

export default startGame;
