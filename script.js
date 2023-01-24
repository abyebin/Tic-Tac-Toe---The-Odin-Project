const gameArea = document.querySelector('.game-area');
const box = document.querySelectorAll('.game-box');
const win = document.getElementById('winner');
const playerX = document.querySelector('.players h1:first-child');
const playerO = document.querySelector('.players h1:last-child');
const reset = document.getElementById('reset');

const player1 = 'x';
const player2 = 'o';
let currentPlayer = player1;

let gameOver = false;

for (let i = 0; i < box.length; i++) {
  box[i].addEventListener('click', function () {
    console.log(currentPlayer);
    // console.log(`box${i + 1}`);

    if (gameOver) {
      return;
    }

    if (box[i].textContent !== '') {
      console.log('its Not empty');
      return;
    }
    box[i].textContent = currentPlayer;
    if (currentPlayer == player1) {
      playerO.classList.add('turn');
      playerX.classList.remove('turn');
      currentPlayer = player2;
    } else {
      playerX.classList.add('turn');
      playerO.classList.remove('turn');
      currentPlayer = player1;
    }

    winner();
  });
}

function winnerDisplay() {
  win.classList.add('win');
  const winDiv = document.createElement('div');
  winDiv.classList.add('textDiv');
  win.appendChild(winDiv);

  const winText = document.createElement('h1');
  winText.classList.add('winText');

  winText.textContent = 'Game Over';
  winDiv.appendChild(winText);

  if (winText.textContent === 'Game Over' && currentPlayer == 'x') {
    const winText2 = document.createElement('h1');
    winText2.classList.add('winText');
    winText2.textContent = 'Player 2 Won the Game';
    winDiv.appendChild(winText2);
  } else if (winText.textContent === 'Game Over' && currentPlayer == 'o') {
    const winText2 = document.createElement('h1');
    winText2.classList.add('winText');
    winText2.textContent = 'Player 1 Won the Game';
    winDiv.appendChild(winText2);
  }

  console.log(currentPlayer);
}

function tieDisplay() {
  win.classList.add('win');
  const winDiv = document.createElement('div');
  winDiv.classList.add('textDiv');
  win.appendChild(winDiv);

  const winText = document.createElement('h1');
  winText.classList.add('winText');

  winText.textContent = 'Game Over';
  winDiv.appendChild(winText);

  const winText2 = document.createElement('h1');
  winText2.classList.add('winText');
  winText2.textContent = 'Tie';
  winDiv.appendChild(winText2);
}

function winner() {
  //row
  if (
    box[0].textContent == box[1].textContent &&
    box[1].textContent == box[2].textContent &&
    box[0].textContent !== ''
  ) {
    console.log('1st row winner');
    winnerDisplay();
    gameOver = true;
  } else if (
    box[3].textContent == box[4].textContent &&
    box[4].textContent == box[5].textContent &&
    box[3].textContent !== ''
  ) {
    console.log('2nd row winner');
    winnerDisplay();
    gameOver = true;
  } else if (
    box[6].textContent == box[7].textContent &&
    box[7].textContent == box[8].textContent &&
    box[6].textContent !== ''
  ) {
    console.log('3nd row winner');
    winnerDisplay();
    gameOver = true;
  }
  // column
  else if (
    box[0].textContent == box[3].textContent &&
    box[3].textContent == box[6].textContent &&
    box[6].textContent !== ''
  ) {
    console.log('1st column inner');
    winnerDisplay();
    gameOver = true;
  } else if (
    box[1].textContent == box[4].textContent &&
    box[4].textContent == box[7].textContent &&
    box[7].textContent !== ''
  ) {
    console.log('2nd column winner');
    winnerDisplay();
    gameOver = true;
  } else if (
    box[2].textContent == box[5].textContent &&
    box[5].textContent == box[8].textContent &&
    box[8].textContent !== ''
  ) {
    console.log('3nd column winner');
    winnerDisplay();
    gameOver = true;
  }
  //diagonal
  else if (
    box[0].textContent == box[4].textContent &&
    box[4].textContent == box[8].textContent &&
    box[8].textContent !== ''
  ) {
    console.log('Diagonal');
    winnerDisplay();
    gameOver = true;
  } else if (
    box[2].textContent == box[4].textContent &&
    box[4].textContent == box[6].textContent &&
    box[6].textContent !== ''
  ) {
    console.log('anti diagonal');
    winnerDisplay();
    gameOver = true;
  } else if (
    box[0].textContent !== '' &&
    box[1].textContent !== '' &&
    box[2].textContent !== '' &&
    box[3].textContent !== '' &&
    box[4].textContent !== '' &&
    box[5].textContent !== '' &&
    box[6].textContent !== '' &&
    box[7].textContent !== '' &&
    box[8].textContent !== ''
  ) {
    // currentPlayer = 'Tie';
    gameOver = true;
    tieDisplay();
  }
}

reset.addEventListener('click', function () {
  window.location.reload();
});
