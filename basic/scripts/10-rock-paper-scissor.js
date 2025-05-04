// Load saved score from localStorage, or start with zeros if no saved score
const score = JSON.parse(localStorage.getItem('score')) || { wins: 0, losses: 0, ties: 0 };

// ===========================
// 3.1 Show saved score on initial page load
// ===========================
// This line runs right when the page loads, 
// so the current score appears on the screen immediately.
UpdateScoreElement();

function playGame(playerMove) {
    const computerMove = pickComputerMove();
    let result = '';

    // Determine win/lose/tie based on playerMove vs computerMove
    if (playerMove === 'Scissors') {
        if (computerMove === 'Rock') {
            result = 'You lose.';
        } else if (computerMove === 'Paper') {
            result = 'You win.';
        } else {
            result = 'It\'s a tie.';
        }
    } else if (playerMove === 'Paper') {
        if (computerMove === 'Rock') {
            result = 'You win.';
        } else if (computerMove === 'Paper') {
            result = 'It\'s a tie.';
        } else {
            result = 'You lose.';
        }
    } else if (playerMove === 'Rock') {
        if (computerMove === 'Rock') {
            result = 'It\'s a tie.';
        } else if (computerMove === 'Paper') {
            result = 'You lose.';
        } else {
            result = 'You win.';
        }
    }

    // Update the score object based on the result
    if (result === 'You win.') {
        score.wins++;
    } else if (result === 'You lose.') {
        score.losses++;
    } else if (result === 'It\'s a tie.') {
        score.ties++;
    }

    // Save the updated score to localStorage
    localStorage.setItem('score', JSON.stringify(score));

    // ===========================
    // 3. Show updated score after each round
    // ===========================
    // After each game, update the score shown on the page immediately.
    UpdateScoreElement();

    document.querySelector('.js-result').innerHTML = result;

    document.querySelector('.js-moves').innerHTML = `<img src="images/${playerMove}-emoji.png" class="move-icon">
    <img src="images/${computerMove}-emoji.png" class="move-icon">`;
}

// ===========================
// 2. Function to update the score shown on the webpage
// ===========================
// This function updates the score display in the HTML <p> element.
function UpdateScoreElement() {
    document.querySelector('.js-score').innerHTML =
        `Win: ${score.wins}, Losses: ${score.losses}, Ties: ${score.ties}`;
}



function resetScore() {
    // Reset score values to 0
    score.wins = 0;
    score.losses = 0;
    score.ties = 0;

    UpdateScoreElement(); // 4. Show reset score immediately
}

// Function to randomly pick a move for the computer
function pickComputerMove() {
    const randomNumber = Math.random();
    let computerMove = '';

    if (randomNumber >= 0 && randomNumber < 1 / 3) {
        computerMove = 'Rock';
    } else if (randomNumber >= 1 / 3 && randomNumber < 2 / 3) {
        computerMove = 'Paper';
    } else {
        computerMove = 'Scissors';
    }

    return computerMove;
}