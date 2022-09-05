'use strict';

// Players
const player0 = document.querySelector('.player--0');
const player1 = document.querySelector('.player--1');

// Buttons
const rollDice = document.querySelector('.btn--roll');
const holdScore = document.querySelector('.btn--hold');
const newGame = document.querySelector('.btn--new');

// Dice
const dice = document.querySelector('.dice');
dice.classList.add('hidden');

// Variables
const playerScore = [0, 0];
let activePlayer = 0;
let currentScore = 0;
let rolledNumber = 0;
let gamePlaying = 1;

// Initialize all score to 0
const currScore0El = document.getElementById('current--0');
const currScore1El = document.getElementById('current--1');
const playerScore0El = document.getElementById('score--0');
playerScore0El.textContent = playerScore[0];
const playerScore1El = document.getElementById('score--1');
playerScore1El.textContent = playerScore[1];

// --------------------------------------------------------------------------------------------
// Rolling a dice and changing image of the dice accordingly
rollDice.addEventListener('click', function () {
  if (gamePlaying) {
    // generate number 1-6
    rolledNumber = Math.floor(Math.random() * 6) + 1;
    console.log(rolledNumber);

    // change dice image
    dice.classList.remove('hidden');
    dice.src = `dice-${rolledNumber}.png`;

    // Adding number for dice === 2-6 and reseting when dice === 1
    if (rolledNumber !== 1) {
      currentScore += rolledNumber;
      // changing players dynamicaly
      document.getElementById(`current--${activePlayer}`).textContent =
        currentScore;
    } else {
      currentScore = 0;
      document.getElementById(`current--${activePlayer}`).textContent =
        currentScore;

      // Switching active player and background color
      activePlayer = activePlayer === 0 ? 1 : 0;

      player0.classList.toggle('player--active');
      player1.classList.toggle('player--active');
    }
  }
});

// --------------------------------------------------------------------------------------------

// Hold Score
holdScore.addEventListener('click', function () {
  // Incrising score for players
  playerScore[activePlayer] += currentScore;

  // Changing Score
  document.getElementById(`score--${activePlayer}`).textContent =
    playerScore[activePlayer];
  document.getElementById(`current--${activePlayer}`).textContent = 0;

  // Deciding winner
  if (playerScore[activePlayer] >= 100) {
    document
      .querySelector(`.player--${activePlayer}`)
      .classList.add('player--winner', 'name');
    gamePlaying = 0;
    dice.classList.add('hidden');
  }

  //  Reseting score
  currentScore = 0;
  if (gamePlaying) {
    // Switching active player and background color
    activePlayer = activePlayer === 0 ? 1 : 0;

    player0.classList.toggle('player--active');
    player1.classList.toggle('player--active');
  }
});

// --------------------------------------------------------------------------------------------
// New game and reseting everything
newGame.addEventListener('click', function () {
  gamePlaying = 1;
  playerScore[0] = 0;
  playerScore[1] = 0;
  currScore0El.textContent = 0;
  currScore1El.textContent = 0;
  playerScore0El.textContent = 0;
  playerScore1El.textContent = 0;
  dice.classList.add('hidden');
  document
    .querySelector(`.player--${activePlayer}`)
    .classList.remove('player--winner', 'name');
  if (activePlayer) {
    player0.classList.toggle('player--active');
    player1.classList.toggle('player--active');
    activePlayer = 0;
  }
});
