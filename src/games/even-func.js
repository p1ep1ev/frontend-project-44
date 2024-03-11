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

function description() {
  return 'Answer "yes" if the number is even, otherwise answer "no".';
}

export { description, task };
