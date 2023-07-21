let Score = JSON.parse(localStorage.getItem('score')) || {
  wins: 0,
  losses: 0,
  ties: 0
};

updatedScoreElement();


// Auto play function is used 

let isAutoPlaying = false;
let intervalId;


// const autoPlay = () => {
// }

function autoPlay() {

  if (!isAutoPlaying) {
    intervalId = setInterval(() =>{
      const playerMove = pickComputerMove();
      playerGame(playerMove);
    }, 1000);
  isAutoPlaying = true;

  } else {
    clearInterval(intervalId);
    isAutoPlaying = false;
  }
}

document.querySelector('.js-rock-button').addEventListener('click', () => {
  playerGame('rock');
});

document.querySelector('.js-paper-button').addEventListener('click', () => {
  playerGame('Paper');
});

document.querySelector('.js-Scissors-button').addEventListener('click', () => {
  playerGame('Scissors');
});

document.body.addEventListener('keydown', (event) => {
  
  if (event.key === 'r') {
    playerGame('rock');
  } else if (event.key === 'p') {
    playerGame('Paper');
  } else if (event.key === 's') {
    playerGame('Scissors');
  }
});

function playerGame(playerMoves) {
  const computerMove = pickComputerMove();

  let result = '';

  if (playerMoves === 'Scissors') {
    if (computerMove === 'rock') {
      result = 'You lose.';
    } else if (computerMove === 'Paper') {
      result = 'You Win.';
    } else if (computerMove === 'Scissors') {
      result = 'Tie.';
    }


  } else if (playerMoves === 'Paper') {
    if (computerMove === 'rock') {
      result = 'You Win.';
    } else if (computerMove === 'Paper') {
      result = 'Tie.';
    } else if (computerMove === 'Scissors') {
      result = 'You lose.';
    }


  } else if (playerMoves === 'rock') {
    if (computerMove === 'rock') {
      result = 'Tie.';
    } else if (computerMove === 'Paper') {
      result = 'You lose.';
    } else if (computerMove === 'Scissors') {
      result = 'You Win.';
    }
  }

  if (result === 'You Win.') {
    Score.wins = Score.wins + 1;
  } else if (result === 'You lose.') {
    Score.losses = Score.losses + 1
  } else if (result === 'Tie.') {
    Score.ties = Score.ties + 1
  };

  localStorage.setItem('score', JSON.stringify(Score));

  updatedScoreElement();

  document.querySelector('.js-result').innerHTML = result;

  document.querySelector('.js-moves').innerHTML = `You
<img src="/Images/${playerMoves}-emoji.png" class="move-icon">
<img src="/Images/${computerMove}-emoji.png" class="move-icon">
Computer Computer`;
}

function updatedScoreElement() {
  document.querySelector('.js-score')
    .innerHTML = `Wins ${Score.wins}, Losses ${Score.losses}, Ties ${Score.ties}`;

}

function pickComputerMove() {

  const randomNumber = Math.random();

  let computerMove = '';

  if (randomNumber >= 0 && randomNumber < 1 / 3) {
    computerMove = 'rock';

  } else if (randomNumber >= 1 / 3 && randomNumber < 2 / 3) {
    computerMove = 'Paper';

  } else if (randomNumber >= 2 / 3 && randomNumber < 1) {
    computerMove = 'Scissors';
  }

  return computerMove;
}
