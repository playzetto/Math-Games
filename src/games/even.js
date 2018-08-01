import readlineSync from 'readline-sync';
// Определения на уровне модуля
const correctMessage = 'Correct!';
const welcomeText = 'Welcome to Brain Games!\nAnswer "yes" if number even otherwise answer "no".';
const isEven = num => num % 2 === 0;
const getRandomNumber = () => Math.floor(Math.random() * 30);

const welcomeMessage = () => console.log(welcomeText);
const playRound = () => {
  const question = getRandomNumber();
  console.log(`\nQuestion: ${question}`);
  const answer = readlineSync.question('Your answer: ');
  const rightAnswer = isEven(question) ? 'yes' : 'no';
  if (answer === rightAnswer) {
    console.log(correctMessage);
    return true;
  }
  console.log(`'${answer}' is wrong answer ;(. Correct answer was '${rightAnswer}'.`);
  return false;
};

export { welcomeMessage, playRound };
