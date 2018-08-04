export const getRandomNumber = (min, max) => Math.floor(Math.random() * (max - min)) + min;
export const getNumberBalanced = (num) => {
  const biggestNum = Math.max(...num);
  const lowestNum = Math.min(...num);
  const sortedNums = num.sort().slice(1, num.length - 1);
  if ((biggestNum - lowestNum) <= 1) {
    return num.sort();
  }
  return getNumberBalanced([biggestNum - 1, lowestNum + 1, ...sortedNums]);
};
