import readlineSync from 'readline-sync';

export const isEven = num => num % 2 === 0;
export const getRandomNumber = (min, max) => Math.floor(Math.random() * (max - min)) + min;
const welcomeMsg = () => console.log('Welcome to the Brain Games!');
const gameRule = rule => console.log(`${rule}\n`);
const userGreeting = () => {
  const userName = readlineSync.question('May I ask your name ? ');
  return userName;
};

export const playGame = (game, rule) => {
  welcomeMsg();
  gameRule(rule);
  const userName = userGreeting();
  const iter = (func, acc) => {
    if (acc === 3) {
      return console.log(`Congratulations, ${userName}!`);
    }
    const [riddleNum, correctAnswer] = func();

    console.log(`Question: ${riddleNum}`);
    const userAnswer = readlineSync.question('Your answer: ');
    if (userAnswer === correctAnswer) {
      console.log('Correct!\n');
      return iter(func, acc + 1);
    }
    return console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'`);
  };
  return iter(game, 0);
};
