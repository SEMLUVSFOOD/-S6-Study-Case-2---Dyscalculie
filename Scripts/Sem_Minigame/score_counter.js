import { displayRandomNumber, hideShowElements } from './game_state.js';

let toAnswer = localStorage.getItem("toAnswer") ? parseInt(localStorage.getItem("toAnswer")) : 0;
toAnswer = 10;


export function progressIncrease() {
    let progress = localStorage.getItem("progress") ? parseInt(localStorage.getItem("progress")) : 0;

    progress++;

    // Check if score hits 10, then reset
    if (progress >= toAnswer) {
        progress = 0; // Reset the score
        window.location.href = "sem_minigame_results.html";
    }

    localStorage.setItem("progress", progress); // Save updated score

    // Update the displayed progress as a percentage
    let currentprogressElement = document.querySelector(".progressbar");

    if (currentprogressElement) {
        let percentage = (progress / toAnswer) * 100; // Calculate percentage
        currentprogressElement.style.width = percentage + "%"; // Update width
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



let score = localStorage.getItem("score") ? parseInt(localStorage.getItem("score")) : 0;
let resultElement = document.querySelector(".results");

let scorePercentage = score/toAnswer * 100;
if(resultElement) {
  resultElement.innerHTML = scorePercentage + "%";
}

let diagnoseText = document.querySelector(".diagnoseText");

if (diagnoseText) {
    switch(true) {
        case (scorePercentage <= 50):
            diagnoseText.innerHTML = "Er is een verhoogde kans op dyscalculie, wij raden u sterk aan om naar een expert te gaan.";
            break;
        case (scorePercentage >= 50 && scorePercentage == 80):
            diagnoseText.innerHTML = "Er is een kans op dyscalculie, wij raden u aan om naar een expert te gaan.";
            break;
        case (scorePercentage > 80):
            diagnoseText.innerHTML = "Volgens deze test heeft u geen dyscalculie, bij twijfel raden we toch aan om naar een expert te gaan.";
            break;
        default:
            diagnoseText.innerHTML = "Er is geen score....";
    }
}