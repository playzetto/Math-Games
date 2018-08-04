import readlineSync from 'readline-sync';

const numberOfQuestions = 3;

const playGame = (game, rule) => {
  console.log('Welcome to the Brain Games!');
  console.log(`${rule}\n`);
  const userName = readlineSync.question('May I ask your name ? ');
  const iter = (acc) => {
    if (acc === numberOfQuestions) {
      console.log(`Congratulations, ${userName}!`);
    }
    const [riddleNum, correctAnswer] = game();
    console.log(`Question: ${riddleNum}`);
    const userAnswer = readlineSync.question('Your answer: ');
    if (userAnswer === correctAnswer) {
      console.log('Correct!\n');
      return iter(acc + 1);
    }
    console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'\nLet's try again, ${userName}!`);
  };
  iter(0);
};
export default playGame;
