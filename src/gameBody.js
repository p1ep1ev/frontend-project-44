import readlineSync from 'readline-sync';
import greeting from './cli.js';

export default function gameBody(description, taskFunc) {
  const playerName = greeting(); // privetstvie
  console.log(description); // pravila igry

  let mark = 0; // marker dlya proverki pobedy
  for (let i = 1; i <= 3; i += 1) {
    const step = taskFunc();
    console.log(`Question: ${step[0]}`); // task()[0]
    const answer = readlineSync.question('Answer: ');

    if (answer === step[1]) {
      console.log('Correct!');
      mark += 1;
    } else {
      console.log(`${answer} is wrong answer ;(. Correct answer was ${step[1]}.`);
      console.log(`Let's try again, ${playerName}!`);
      break;
    }
  }

  if (mark === 3) {
    console.log(`Congratulations, ${playerName}!`);
  }
}
