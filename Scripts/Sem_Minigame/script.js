import { startGame } from './game_state.js';
import { displayRandomNumber } from './game_state.js';

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

let progress = localStorage.getItem("progress") ? parseInt(localStorage.getItem("progress")) : 0;
// Update the displayed score
  let currentprogressElement = document.querySelector(".currentprogress");
  if (currentprogressElement) {
      currentprogressElement.innerText = `Progress: ${progress}`;
  }


let currentRandomNumbers = JSON.parse(localStorage.getItem("randomNumbers"));
console.log("Saved Random Numbers:", currentRandomNumbers);
displayRandomNumber();