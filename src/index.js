import readlineSync from 'readline-sync';

const numberOfQuestions = 3;
const welcomeMsg = () => console.log('Welcome to the Brain Games!');
const gameRule = rule => console.log(`${rule}\n`);
const userGreeting = () => {
  const userName = readlineSync.question('May I ask your name ? ');
  return userName;
};

const playGame = (game, rule) => {
  welcomeMsg();
  gameRule(rule);
  const userName = userGreeting();
  for (let i = 0; i < numberOfQuestions; i += 1) {
    const [userAnswer, correctAnswer] = game();
    if (userAnswer === correctAnswer) {
      console.log('Correct!\n');
    } else {
      console.log(`'${userAnswer}' is wrong answer. Correct answer was '${correctAnswer}'`);
      console.log(`Let's try again, ${userName}!\n`);
      return false;
    }
  }
  console.log(`Congratulations, ${userName}!`);
  return true;
};

export default playGame;
