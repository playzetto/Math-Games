import readlineSync from 'readline-sync';

const startGameEngine = (alghoritm) => {
  const numberFromQuestion
  const greetPlayer = (rule) => {
    console.log('Welcome to Brain Games!\n');
    console.log(rule);
    const userName = readlineSync.question('May I have your name? ');
    console.log(`Hello, ${userName}`);
    return userName;
  };
  const incorrectAnswer = (correctAnswer, userAnswer, userName) => {
    console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'`);
    console.log(`Let's try again, ${userName}`);
  };
  const correctAnswer = () => {
    console.log('Correct!');
  };
  const playRound = () => {
    const userAnswer =
  }
};
