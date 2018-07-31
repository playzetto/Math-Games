import readlineSync from 'readline-sync';

const askQuestion = () => {
  const randomNumber = Math.floor(Math.random() * 30);
  console.log(`\nQuestion: ${randomNumber}`);
  const answer = readlineSync.question('Your answer: ');
  let rightAnswer;
  if (answer % 2 === 0) {
    rightAnswer = 'yes';
  } else {
    rightAnswer = 'no';
  }

  if (randomNumber % 2 === 0 && answer === 'yes') {
    console.log('\nCorrect!');
    return true;
  }
  if (!(randomNumber % 2 === 0) && answer === 'no') {
    console.log('\nCorrect!');
    return true;
  }
  console.log(`'${answer}' is wrong answer ;(. Correct answer was ${rightAnswer}.`);
  return false;
};

const startGame = () => {
  console.log('Welcome to Brain Games!\nAnswer "yes" if number even otherwise answer "no".');
  const userName = readlineSync.question('\nMay I have your name? ');
  console.log(`Hello, ${userName}`);
  //  Asking question
  for (let i = 0; i < 3; i += 1) {
    if (!askQuestion()) {
      console.log(`\nLet's try again, ${userName}!`);
      break;
    }
    if (i === 2) {
      console.log(`\nCongratulations, ${userName}!`);
    }
  }
};


export default startGame;
