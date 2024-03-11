#!/usr/bin/env node
import gameBody from '../src/gameBody.js';

const description = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const getRandomInt = (max) => Math.floor(Math.random() * max);

function isPrime(number) {
  for (let i = 2; i < number; i += 1) {
    if (number % i === 0) return false;
  }
  return number !== 1;
}

function getTask() {
  const task = [];
  const number = getRandomInt(100);

  task[0] = number.toString();

  if (isPrime(number) === true) {
    task[1] = 'yes';
  } else {
    task[1] = 'no';
  }

  return task;
}

gameBody(description, getTask);
