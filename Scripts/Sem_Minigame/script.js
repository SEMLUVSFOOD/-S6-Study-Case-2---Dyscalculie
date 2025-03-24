import { progressIncrease } from './score_counter.js';
import { startGame } from './game_state.js';

let startGameButton = document.querySelector(".startGame");
if (startGameButton) {
  startGameButton.addEventListener("click", startGame);
}
// Listen for "Enter" key press to start the game & Generate the 10 Random Numbers
document.addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    startGame();
  }
});

console.log("Saved Random Numbers:", JSON.parse(localStorage.getItem("randomNumbers")));


// Update the displayed progress
let progress = localStorage.getItem("progress") ? parseInt(localStorage.getItem("progress")) : 0;
let currentprogressElement = document.querySelector(".currentprogress");
if (currentprogressElement) {
  currentprogressElement.innerText = `Progress: ${progress}`;
}