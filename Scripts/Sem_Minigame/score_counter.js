import { displayRandomNumber, hideShowElements } from './game_state.js';

export function progressIncrease() {
    let progress = localStorage.getItem("progress") ? parseInt(localStorage.getItem("progress")) : 0;

    progress++;

    // Check if score hits 10, then reset
    if (progress >= 2) {
        progress = 0; // Reset the score
        window.location.href = "sem_minigame_results.html";
    }

    localStorage.setItem("progress", progress); // Save updated score

    // Update the displayed score
    let currentprogressElement = document.querySelector(".currentprogress");
    if (currentprogressElement) {
        currentprogressElement.innerText = `Progress: ${progress}`;
    }

    displayRandomNumber();
    hideShowElements();
}

export function checkAnswer(clickedButton) {
    let answerBox = document.querySelector(".AnswerBox");
    answerBox.style.display = 'none';

    // Select the correct option based on clickedButton
    let selectedOption;
    if (clickedButton === 1) {
        selectedOption = document.querySelector(".option1").innerHTML;
    } else if (clickedButton === 2) {
        selectedOption = document.querySelector(".option2").innerHTML;
    }
    
    // Retrieve values from localStorage
    let currentRandomNumbers = JSON.parse(localStorage.getItem("randomNumbers"));
    let progress = localStorage.getItem("progress") ? parseInt(localStorage.getItem("progress")) : 0;
    let score = localStorage.getItem("score") ? parseInt(localStorage.getItem("score")) : 0;

    // Compare selected option with the correct answer
    if (selectedOption === currentRandomNumbers[progress].toString()) {
        score++; // Increment score if the answer is correct
    }

    // Save the updated score in localStorage
    localStorage.setItem("score", score);

    console.log("score = " + score);

    // Call progressIncrease if needed
    progressIncrease();
}
