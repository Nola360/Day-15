// GAME FUNCITIONS:
// - Player must guess a number between min snd max
// - Player gets a certain amount of guesses
// - Notify player of remaining guesses
// - Notify player of correct answer if loses
// - Let player choose to play again

// Game values
let min = 1,
  max = 10,
  winningNum = 6,
  guessesLeft = 3;

// UL Elements
const game = document.querySelector('#game'),
  minNum = document.querySelector('.min-num'),
  maxNum = document.querySelector('.max-num'),
  guessBtn = document.querySelector('#guess-btn'),
  guessInput = document.querySelector('#guess-input'),
  message = document.querySelector('.message');

// Assign Min & Max in UI
minNum.textContent = min;
maxNum.textContent = max;


// Listen for guess
guessBtn.addEventListener('click', function () {
  // ParseInt turns string to integer
  let guess = parseInt((guessInput.value));
  // console.log(guess);
  if (isNaN(guess) || guess < min || guess > max) {
    setMessage(`Please enter number betweeen ${min} & ${max}`, 'red');
  }

  // Check if won
  if (guess === winningNum) {
    // Change border color
    guessInput.style.borderColor = 'green';
    // Disable Input
    guessInput.disabled = true;
    setMessage(`${winningNum} is the correct number! You Win`, 'green');
  } else {

  }

})

// Set Message Function
function setMessage(msg, color) {
  message.textContent = msg;
  message.style.color = color;
}
