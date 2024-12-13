'use strict';
// #60b347
// document.querySelector('.massege').textContent;
// document.querySelector('.again');
// document.querySelector('.number').textContent = 5;
// document.querySelector('.guess').value;
// document.querySelector('.check');
let score = 10;
let secretNumber = Math.trunc(Math.random() * 20 + 1);
let highScore = 0;

// function
document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess);

  // if the guess is empty
  if (!guess) {
    document.querySelector('.massege').textContent = '⛔ No Number';
    score--;
    document.querySelector('.score').textContent = score;

    // if the guess is equal to secretNumber
  } else if (guess === secretNumber) {
    document.querySelector('.massege').textContent = '🎉 Congratulation';
    document.querySelector('.number').textContent = secretNumber;
    document.querySelector('body').style.backgroundColor = ' #60b347';
    document.querySelector('.number').style.width = '30rem';
    if (score > highScore) {
      highScore = score;
      document.querySelector('.highscore').textContent = highScore;
    }
    // if the guess isn't equal to secret Number
  } else if (guess !== secretNumber) {
    if (score > 1) {
      document.querySelector('.massege').textContent =
        guess > secretNumber ? '📈 Too high' : '📉 Too Low';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.massege').textContent = '❌ You Lost The Game';
      document.querySelector('.score').textContent = 0;
    }
  }
});

document.querySelector('.again').addEventListener('click', function () {
  score = 10;
  document.querySelector('.score').textContent = 10;
  document.querySelector('.number').textContent = '?';
  secretNumber = Math.trunc(Math.random() * 20 + 1);
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('.massege').textContent = 'Start guessing...';
  document.querySelector('.guess').value = Number('');
  document.querySelector('body').style.backgroundColor = '#222';
});

// if the guess is greater than secretNumber
//   } else if (guess > secretNumber) {
//     if (score > 1) {
//       document.querySelector('.massege').textContent = '📈 Too high';
//       score--;
//       document.querySelector('.score').textContent = score;
//     } else {
//       document.querySelector('.massege').textContent = '❌ You Lost The Game';
//       document.querySelector('.score').textContent = 0;
//     }

//     // if the guess is Lower than secretNumber
//   } else if (guess < secretNumber) {
//     if (score > 1) {
//       document.querySelector('.massege').textContent = '📉 Too Low';
//       score--;
//       document.querySelector('.score').textContent = score;
//     } else {
//       document.querySelector('.massege').textContent = '❌ You Lost The Game';
//       document.querySelector('.score').textContent = 0;
//     }
//   }
// });

// Again Button
