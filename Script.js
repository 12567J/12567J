javascript
let randomNumber = Math.floor(Math.random() * 100) + 1;
let attempts = 0;

const guessInput = document.getElementById('guessInput');
const guessButton = document.getElementById('guessButton');
const message = document.getElementById('message');
const attemptsDisplay = document.getElementById('attempts');
const restartButton = document.getElementById('restartButton');

function checkGuess() {
    const userGuess = Number(guessInput.value);
    attempts++;

    if (userGuess === randomNumber) {
        message.textContent = 'Parabéns! Você adivinhou o número!';
        guessButton.disabled = true;
        restartButton.style.display = 'block';
    } else if (userGuess < randomNumber) {
        message.textContent = 'Tente um número maior!';
    } else {
        message.textContent = 'Tente um número menor!';
    }

    attemptsDisplay.textContent = attempts;
    guessInput.value = '';
    guessInput.focus();
}

function restartGame() {
    randomNumber = Math.floor(Math.random() * 100) + 1;
    attempts = 0;
    message.textContent = '';
    attemptsDisplay.textContent = attempts;
    guessButton.disabled = false;
    restartButton.style.display = 'none';
    guessInput.value = '';
    guessInput.focus();
}

guessButton.addEventListener('click', checkGuess);
restartButton.addEventListener('click', restartGame);
