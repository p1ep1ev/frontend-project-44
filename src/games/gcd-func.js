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

function description() {
  return 'Find the greatest common divisor of given numbers.';
}

export { description, task };
