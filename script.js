const gameArea = document.querySelector('.game-area');
const box = document.querySelectorAll('.game-box');
const win = document.getElementById('winner');
const playerX = document.querySelector('.players h1:first-child');
const playerO = document.querySelector('.players h1:last-child');

const player1 = 'x';
const player2 = 'O';
let currentPlayer = player1;

let gameOver = false;

for (let i = 0; i < box.length; i++) {
  box[i].addEventListener('click', function () {
    console.log(`box${i + 1}`);

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
  if (currentPlayer === 'o') {
    currentPlayer = 'Player 2';
  } else if( currentPlayer === "x"){
    currentPlayer = "Player 1"
  }

  winText.textContent = 'Winner ' + currentPlayer;
  winDiv.appendChild(winText);
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
    currentPlayer = 'Tie';
    gameOver = true;
    winnerDisplay();
  }
}
console.log(box[0]);
