function getComputerChoice() {
	const $values = ['rock', 'paper', 'scissors'];
	return $values[Math.floor(Math.random() * $values.length)];
}

function playRound(playerSelection, computerSelection) {

	if (playerSelection === computerSelection ) {
		return "Ties";
	}

	if (playerSelection === 'rock' && computerSelection === 'paper' ) {
		return "You Lose! Paper beats Rock";
	}

	if (playerSelection === 'paper' && computerSelection === 'scissors' ) {
		return "You Lose! scissors beats Paper";
	}

	if (playerSelection === 'scissors' && computerSelection === 'rock' ) {
		return "You Lose! Rock beats Scissors";
	}

	return "You Win!";
}

const btns = document.querySelectorAll('button');
const winner = document.getElementById('winner');
const divComputerScore = document.getElementById('computerScore');
const divPlayerScore = document.getElementById('playerScore');

btns.forEach(btn => btn.addEventListener('click', function (event) {
	if (winner.textContent !== '') {
		winner.textContent = '';
		divComputerScore.textContent = 0;
		divPlayerScore.textContent = 0;
	}
	const playerSelection = event.target.textContent.toLowerCase();
	const divPlayerSelection = document.getElementById('playerSelection');
	divPlayerSelection.textContent = playerSelection;

	const computerSelection = getComputerChoice();
	const divComputerSelection = document.getElementById('computerSelection');
	divComputerSelection.textContent = computerSelection;

	const result = playRound(playerSelection, computerSelection);
	const divResult = document.getElementById('result');
	divResult.textContent = result;


	let currentComputerScore = parseInt(divComputerScore.textContent);

	let currentPlayerScore = parseInt(divPlayerScore.textContent);

	if (result.includes('Lose')) {
		++currentComputerScore;
		divComputerScore.textContent = currentComputerScore;
	} else if (result.includes('Win')) {
		++currentPlayerScore;
		divPlayerScore.textContent = currentPlayerScore;
	}
	if (currentComputerScore === 5 || currentPlayerScore === 5) {
		if (currentComputerScore === 5) {
			winner.textContent = 'Computer';
		} else {
			winner.textContent = 'Player';
		}
	}
}));