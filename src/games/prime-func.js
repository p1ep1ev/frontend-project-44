const getRandomInt = (max) => Math.floor(Math.random() * max);

function isPrime(number) {
  for (let i = 2; i < number; i += 1) {
    if (number % i === 0) return false;
  }
  return number !== 1;
}

function task() {
  const answer = [];
  const number = getRandomInt(100);

  answer[0] = number.toString();

  if (isPrime(number) === true) {
    answer[1] = 'yes';
  } else {
    answer[1] = 'no';
  }

  return answer;
}

function description() {
  return 'Answer "yes" if given number is prime. Otherwise answer "no".';
}

export { description, task };
