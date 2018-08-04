export const isEven = num => num % 2 === 0;
export const getRandomNumber = (min, max) => Math.floor(Math.random() * (max - min)) + min;
export const findGCD = (num1, num2) => {
  if (!num2) {
    return num1;
  }
  return findGCD(num2, num1 % num2);
};
