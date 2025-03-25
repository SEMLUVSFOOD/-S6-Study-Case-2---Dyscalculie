import { startGame } from './game_state.js';
import { displayRandomNumber } from './game_state.js';
import { hideShowElements } from './game_state.js';


let startGameButton = document.querySelector(".startGame");
if (startGameButton) {
  startGameButton.addEventListener("click", startGame);
}

let backHomeButton = document.querySelector(".backHome");

// Listen for "Enter" key press to start the game & Generate the 10 Random Numbers
document.addEventListener("keydown", (event) => {
  if(startGameButton) {
    if (event.key === "Enter") {
      startGame();
    }
  }
  if(backHomeButton) {
    if (event.key === "Enter") {
      window.location.href = "../index.html";
    }
  }
});

let currentRandomNumbers = JSON.parse(localStorage.getItem("randomNumbers"));
console.log("Saved Random Numbers:", currentRandomNumbers);
displayRandomNumber();

hideShowElements();