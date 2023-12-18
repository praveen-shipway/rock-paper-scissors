function getComputerChoice() {
	const $values = ['rock', 'paper', 'scissors'];
	return $values[Math.floor(Math.random() * $values.length)];
}

function playRound(playerSelection, computerSelection) {

	if (playerSelection.toLowerCase() === computerSelection.toLowerCase() ) {
		return "Ties";
	}

	if (playerSelection.toLowerCase() === 'rock' && computerSelection.toLowerCase() === 'paper' ) {
		return "You Lose! Paper beats Rock";
	}

	if (playerSelection.toLowerCase() === 'paper' && computerSelection.toLowerCase() === 'scissors' ) {
		return "You Lose! scissors beats Paper";
	}

	if (playerSelection.toLowerCase() === 'scissors' && computerSelection.toLowerCase() === 'rock' ) {
		return "You Lose! Rock beats Scissors";
	}

	return "You Win!";
}

function game() {
	let score = 0;

	for (let i = 0; i < 5; i++) {
		let playerSelection = prompt("Enter 'Rock', 'Paper', 'Scissors'", "");
		let computerSelection = getComputerChoice();

		let result = playRound(playerSelection, computerSelection);
		console.log(result);
		
		if (result.includes('Ties')) {
			i--;
		} else if (!result.includes('Lose')) {
			score++;
		}
	}
	return score;
}

let finalScore = game();
console.log("Final score is " + finalScore);