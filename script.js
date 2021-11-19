function randomRgb() {
  const r = Math.floor(Math.random() * 255);
  const g = Math.floor(Math.random() * 255);
  const b = Math.floor(Math.random() * 255);
  return `rgb(${r}, ${g}, ${b})`;
}

function generateBallsColors() {
  const colorsContainer = document.getElementById('colors-container');
  colorsContainer.innerHTML = '';
  for (let i = 0; i <= 5; i += 1) {
    const div = document.createElement('div');
    div.style.background = randomRgb();
    div.className = 'ball';
    colorsContainer.appendChild(div);
  }
}

generateBallsColors();

function pickRandomColor(elements) {
  const index = Math.floor(Math.random() * elements.length);
  return elements[index].style.background;
}

function generateColor() {
  const colorList = document.getElementsByClassName('ball');
  const secretColor = pickRandomColor(colorList);
  const rgbText = document.getElementById('rgb-color');
  const rgbNumbersForUser = secretColor.slice(3);
  rgbText.innerHTML = rgbNumbersForUser;
  const h2Text = document.querySelector('h2');
  h2Text.innerHTML = 'Escolha uma cor';
  return secretColor;
}

let secretColor = generateColor();

let ScoreCunter = 0;
function setScore() {
  const score = document.getElementById('score');
  score.innerHTML = `Placar: ${ScoreCunter += 3}`;
}

function colorHit(backgroundColor) {
  const answer = document.getElementById('answer');
  if (backgroundColor === secretColor) {
    answer.innerHTML = 'Acertou!';
    setScore();
    return;
  }
  answer.innerHTML = 'Errou! Tente novamente!';
}

document.addEventListener('click', (e) => {
  if (e.target.className === 'ball') {
    colorHit(e.target.style.background);
  }
});

const resetBtn = document.getElementById('reset-game');
resetBtn.addEventListener('click', () => {
  // const colorList = document.getElementsByClassName('ball');
  generateBallsColors();
  secretColor = generateColor();
});
