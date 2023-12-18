function getComputerChoice() {
	const $values = ['rock', 'paper', 'scissors'];
	return $values[Math.floor(Math.random() * $values.length)];
}