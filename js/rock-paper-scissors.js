const rock = document.getElementById("rock");
const paper = document.getElementById("paper");
const scissors = document.getElementById("scissors");
const choices = ["Камінь", "Ножиці", "Папір"];
const result = document.getElementById("rpsConclusion");
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
  playerChoice = "Камінь";

  if (aiChoice === playerChoice) {
    result.textContent = "Нічия!";
  } else if (aiChoice === "Папір") {
    result.textContent = "Комп'ютер виграв раунд!";
    result.style.color = "#990000";
    aiScore++;
  } else if (aiChoice === "Ножиці") {
    result.textContent = "Ви виграли раунд!";
    result.style.color = "#039900";
    playerScore++;
  }
  aiChoiceDisplayer.textContent = aiChoice;
  aiScoreDisplayer.textContent = aiScore;
  playerScoreDisplayer.textContent = playerScore;
});

paper.addEventListener("click", () => {
  aiChoice = choices[Math.floor(Math.random() * 3)];
  console.log(aiChoice);
  playerChoice = "Папір";

  if (aiChoice === playerChoice) {
    result.textContent = "Нічия!";
  } else if (aiChoice === "Ножиці") {
    result.textContent = "Комп'ютер виграв раунд!";
    result.style.color = "#990000";
    aiScore++;
  } else if (aiChoice === "Камінь") {
    result.textContent = "Ви виграли раунд!";
    result.style.color = "#039900";
    playerScore++;
  }
  aiChoiceDisplayer.textContent = aiChoice;
  aiScoreDisplayer.textContent = aiScore;
  playerScoreDisplayer.textContent = playerScore;
});

scissors.addEventListener("click", () => {
  aiChoice = choices[Math.floor(Math.random() * 3)];
  console.log(aiChoice);
  playerChoice = "Ножиці";

  if (aiChoice === playerChoice) {
    result.textContent = "Нічия!";
  } else if (aiChoice === "Камінь") {
    result.textContent = "Комп'ютер виграв раунд!";
    result.style.color = "#990000";
    aiScore++;
  } else if (aiChoice === "Папір") {
    result.textContent = "Ви виграли раунд!";
    result.style.color = "#039900";
    playerScore++;
  }
  aiChoiceDisplayer.textContent = aiChoice;
  aiScoreDisplayer.textContent = aiScore;
  playerScoreDisplayer.textContent = playerScore;
});
