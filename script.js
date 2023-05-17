const rockButton = document.getElementById("rock");
const paperButton = document.getElementById("paper");
const scissorsButton = document.getElementById("scissors");
const resultElement = document.getElementById("result");
const playerScoreElement = document.getElementById("playerScore");
const computerScoreElement = document.getElementById("computerScore");
const roundElement = document.getElementById("round");
const playerElement = document.getElementById("player");
const computerElement = document.getElementById("computer");
let playerScore = 0;
let computerScore = 0;
let round = 0;

rockButton.addEventListener("click", () => {
  playRound("rock");
});

paperButton.addEventListener("click", () => {
  playRound("paper");
});

scissorsButton.addEventListener("click", () => {
  playRound("scissors");
});

function getComputerChoice() {
  const choices = ["rock", "paper", "scissors"];
  const computerChoice = choices[Math.floor(Math.random() * choices.length)];
  return computerChoice;
}

function playRound(playerChoice) {
  const computerChoice = getComputerChoice();
  let result;
  let playerEmoji;
  let computerEmoji;
  round++;
  if (playerChoice === computerChoice) {
    result = "It's a tie!😐";
    playerEmoji = getEmoji(playerChoice);
    computerEmoji = getEmoji(computerChoice);
    removeAnimationClass("player", "animate-player")
    removeAnimationClass("computer", "animate-computer")
  } else if (
    (playerChoice === "rock" && computerChoice === "scissors") ||
    (playerChoice === "paper" && computerChoice === "rock") ||
    (playerChoice === "scissors" && computerChoice === "paper")
  ) {
    result = "You win!😎";
    playerScore++;
    playerEmoji = getEmoji(playerChoice);
    computerEmoji = getEmoji(computerChoice);
    animateEmoji("player", "animate-player");
    removeAnimationClass("computer", "animate-computer");
  } else {
    result = "Computer wins!😢";
    computerScore++;
    playerEmoji = getEmoji(playerChoice);
    computerEmoji = getEmoji(computerChoice);
    animateEmoji("computer", "animate-computer");
    removeAnimationClass("player", "animate-player");
  }
  roundElement.textContent = `Round: ${round}`;
  resultElement.textContent = `${playerChoice} vs ${computerChoice} ${result}`;
  playerScoreElement.textContent = `🧠You: ${playerScore}`;
  computerScoreElement.textContent = `🤖Computer: ${computerScore}`;
  playerElement.textContent = playerEmoji;
  computerElement.textContent = computerEmoji;
}

function getEmoji(choice) {
  if (choice === "rock") {
    return "✊";
  } else if (choice === "paper") {
    return "✋";
  } else if (choice === "scissors") {
    return "✌️";
  }
}

function animateEmoji(elementId, animationClass) {
  const element = document.getElementById(elementId);
  element.classList.add(animationClass);
}

function removeAnimationClass(elementId, animationClass) {
  const element = document.getElementById(elementId);
  element.classList.remove(animationClass);
}
