'use strict';
let secretNumber = Math.trunc(Math.random() * 20 + 1)
let score = Number(document.querySelector('.score').textContent);
let highScore = 0;

document.querySelector('.check').addEventListener('click', () => {
    const guess = Number(document.querySelector('.guess').value);
    if (!guess) {
        document.querySelector('.message').textContent = 'No Number!'
    }
    else if (guess === secretNumber && score > 0) {
        document.querySelector('.message').textContent = 'Congrats you win!'
        document.querySelector('.number').textContent = secretNumber;
        document.querySelector('body').style.backgroundColor = '#60b347';
        document.querySelector('.number').style.width = '30rem';
        if (score > highScore) {
            document.querySelector('.highscore').textContent = score;
        }

    }
    else if (guess !== secretNumber && score > 1) {
        document.querySelector('.message').textContent = guess > secretNumber ? 'Too High !' : 'Too Low !';
        score--;
        document.querySelector('.score').textContent = score;
    }

    else {
        document.querySelector('.message').textContent = 'You Lost!';
        document.querySelector('body').style.backgroundColor = 'red';
        score = 0;
        document.querySelector('.score').textContent = '0';
        document.querySelector('.number').style.width = '30rem';
        document.querySelector('.number').textContent = secretNumber;
    }
})

document.querySelector('.again').addEventListener('click', () => {
    score = 20;
    document.querySelector('.score').textContent = '20';
    document.querySelector('.number').textContent = '?';
    document.querySelector('.message').textContent = 'Start guessing...';
    document.querySelector('body').style.backgroundColor = '#222';
    document.querySelector('.guess').value = '';
    document.querySelector('.score').textContent = '20';
    secretNumber = Math.trunc(Math.random() * 20 + 1);
    document.querySelector('.number').style.width = '15rem';



})
