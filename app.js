'use strict';
const startContainer = document.querySelector('.start-container');
const startBtn = document.querySelector('.start-btn');
const body = document.querySelector('body');
const check = document.querySelector('.check');
const again = document.querySelector('.again');
const message = document.querySelector('.message');
const scores = document.querySelector('.score');
const highScore = document.querySelector('.high--score');
const mainMessage = document.querySelector('.main-message');
const number = document.querySelector('.number');

// Create Random Num
let random = Math.trunc(Math.random() * 20 + 1);

// Create Score
let score = 10;

// Create HighScore
let bestHighScore = 0;

startBtn.addEventListener('click', function () {
  startContainer.classList.add('start-hidden');
});
// Make Check Btn Function
check.addEventListener('click', function () {
  // Call Input
  const guess = Number(document.querySelector('.guess').value);
  // Check if input is empty
  if (!guess) {
    message.textContent = ' ⛔ No Number';

    /* if guess = random num */
  } else if (guess === random) {
    mainMessage.textContent = 'Congratulation';
    message.textContent = ' 👍 Correct Number';
    body.style.background = '#60b347';
    number.textContent = random;
    number.style.width = '30rem';

    if (score > bestHighScore) {
      bestHighScore = score;
      highScore.textContent = bestHighScore;
    }

    // Check if guess > random num
  } else if (guess > random) {
    message.textContent = '📈 Too High';
    if (score > 1) {
      scores.textContent = score = score - 1;
    } else {
      score = 0;
      scores.textContent = 0;
      message.textContent = 'You Lost';
      mainMessage.textContent = 'Game Over';
      body.style.background = 'red';
    }
    // Check if guess < random num
  } else if (guess < random) {
    message.textContent = '📉 Too Low';
    if (score > 1) {
      scores.textContent = score = score - 1;
    } else {
      score = 0;
      scores.textContent = 0;
      message.textContent = 'You Lost';
      mainMessage.textContent = 'Game Over';
      body.style.background = 'red';
    }
  }
});

// Reset The game
again.addEventListener('click', function () {
  // Create Random Num
  random = Math.trunc(Math.random() * 20 + 1);

  // reset score
  score = 10;
  scores.textContent = 10;

  // reset styles
  body.style.background = '#222';
  mainMessage.textContent = 'Guess My Number!';
  number.style.width = '15rem';
  number.textContent = '?';
  // number.style.borderRadius = '50%';
  message.textContent = 'Start guessing...';
  document.querySelector('.guess').value = '';
});
