import { startGame } from './game_state.js';
import { displayRandomNumber } from './game_state.js';
import { hideShowElements } from './game_state.js';


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

let currentRandomNumbers = JSON.parse(localStorage.getItem("randomNumbers"));
console.log("Saved Random Numbers:", currentRandomNumbers);
displayRandomNumber();

hideShowElements();

let score = localStorage.getItem("score") ? parseInt(localStorage.getItem("score")) : 0;
let resultElement = document.querySelector(".results");
if(resultElement) {
  resultElement.innerHTML = score;
}

