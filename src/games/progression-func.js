function task() {
  const length = Math.floor(Math.random() * 6) + 5;
  const step = Math.floor(Math.random() * 10) + 1;
  const hiddenIndex = Math.floor(Math.random() * length);
  const startNumber = Math.floor(Math.random() * 20) + 1; // Начальное число прогрессии
  const progression = [];

  for (let i = 0; i < length; i += 1) {
    progression.push(startNumber + step * i);
  }

  const hiddenNumber = progression[hiddenIndex];
  progression[hiddenIndex] = '..';
  const answer = `${hiddenNumber}`;
  return [`${progression}`, answer];
}

function description() {
  return 'What number is missing in the progression?';
}

export { description, task };
