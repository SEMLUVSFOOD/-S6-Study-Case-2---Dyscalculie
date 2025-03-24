import { scoreIncrease } from './score_counter.js';
import { startGame } from './game_state.js';

let startGameButton = document.querySelector(".startGame");
if (startGameButton) {
  startGameButton.addEventListener("click", startGame);
}

let scoreIncreaseButton = document.querySelector(".scoreincrease");
if (scoreIncreaseButton) {
    scoreIncreaseButton.addEventListener("click", scoreIncrease);
}
