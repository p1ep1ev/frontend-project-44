#!/usr/bin/env node
import gameBody from '../src/gameBody.js';

const description = 'Find the greatest common divisor of given numbers.';

function task() {
  const operand1 = Math.round(Math.random() * 101);
  const operand2 = Math.round(Math.random() * 101);
  
  let a = operand1;
  let b = operand2;
  while (a !== 0 && b !== 0) {
    if (a >= b) {
      a -= b;
    } else {
      b -= a;
    }
  }
  const answer = `${a + b}`;
  return [`${operand1} ${operand2}`, answer];
}

gameBody(description, task);
