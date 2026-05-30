const rock = document.getElementById("rock");
const paper = document.getElementById("paper");
const scissors = document.getElementById("scissors");
const choices = ["rock", "paper", "scissors"];
const result = document.querySelector(".rps-conclusion");
const aiChoiceDisplayer = document.querySelector(".rps-ai-choice");
const aiScoreDisplayer = document.getElementById("ai-score");
const playerScoreDisplayer = document.getElementById("user-score");

let aiScore = 0;
let playerScore = 0;
let playerChoice = "";
let aiChoice = "";
aiScoreDisplayer.textContent = aiScore;
playerScoreDisplayer.textContent = playerScore;

rock.addEventListener("click", () => {
  aiChoice = choices[Math.floor(Math.random() * 3)];
  console.log(aiChoice);
  playerChoice = "rock";

  if (aiChoice === playerChoice) {
    result.textContent = "Нічия!";
  } else if (aiChoice === "paper") {
    result.textContent = "Ви програли раунд!";
    aiScore++;
  } else if (aiChoice === "scissors") {
    result.textContent = "Ви виграли раунд!";
    playerScore++;
  }
  aiScoreDisplayer.textContent = aiScore;
  playerScoreDisplayer.textContent = playerScore;
});

paper.addEventListener("click", () => {
  aiChoice = choices[Math.floor(Math.random() * 3)];
  console.log(aiChoice);
  playerChoice = "paper";

  if (aiChoice === playerChoice) {
    result.textContent = "Нічия!";
  } else if (aiChoice === "scissors") {
    result.textContent = "Ви програли раунд!";
    aiScore++;
  } else if (aiChoice === "rock") {
    result.textContent = "Ви виграли раунд!";
    playerScore++;
  }
  aiScoreDisplayer.textContent = aiScore;
  playerScoreDisplayer.textContent = playerScore;
});

scissors.addEventListener("click", () => {
  aiChoice = choices[Math.floor(Math.random() * 3)];
  console.log(aiChoice);
  playerChoice = "scissors";

  if (aiChoice === playerChoice) {
    result.textContent = "Нічия!";
  } else if (aiChoice === "rock") {
    result.textContent = "Ви програли раунд!";
    aiScore++;
  } else if (aiChoice === "paper") {
    result.textContent = "Ви виграли раунд!";
    playerScore++;
  }
  aiScoreDisplayer.textContent = aiScore;
  playerScoreDisplayer.textContent = playerScore;
});
