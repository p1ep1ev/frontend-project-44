#!/usr/bin/env node
// import readlineSync from 'readline-sync';
// import greeting from '../src/cli.js';
import gameBody from '../src/gameBody.js';

// const playerName = greeting();

const description = 'Answer "yes" if the number is even, otherwise answer "no".';

function task() {
  const q = Math.round(Math.random() * 100);
  // const a = q % 2; // вернет 1 - если нечет, вернет 0 - если чет
  let a = '';
  if (q % 2 === 0) {
    a = 'yes';
  } else {
    a = 'no';
  }
  return [q, a];
}

gameBody(description, task);
