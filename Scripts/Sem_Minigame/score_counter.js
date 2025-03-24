import { displayRandomNumber } from './game_state.js';

export function progressIncrease() {
    let progress = localStorage.getItem("progress") ? parseInt(localStorage.getItem("progress")) : 0;

    progress++;

    // Check if score hits 10, then reset
    if (progress >= 10) {
        progress = 0; // Reset the score
        window.location.href = "sem_minigame.html";
    }

    localStorage.setItem("progress", progress); // Save updated score

    // Update the displayed score
    let currentprogressElement = document.querySelector(".currentprogress");
    if (currentprogressElement) {
        currentprogressElement.innerText = `Progress: ${progress}`;
    }

    displayRandomNumber();
}
