const getRandomInt = (max) => Math.floor(Math.random() * max);
function getRandomArbitrary(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}

function task() {
  const answer = [];

  const strArr = [];

  let number = getRandomInt(100);
  const number2 = getRandomInt(20);

  const iteration = getRandomArbitrary(5, 10);
  const indexElement = getRandomArbitrary(1, iteration);
  for (let i = 0; i <= iteration; i += 1) {
    strArr.push(number);
    number += number2;
  }
  answer[1] = strArr[indexElement].toString();

  const result = strArr.join(' ');

  answer[0] = result.replace(`${answer[1]}`, '..');

  return answer;
}

function description() {
  return 'What number is missing in the progression?';
}

export { description, task };
