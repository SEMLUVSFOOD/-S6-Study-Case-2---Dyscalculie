import { checkAnswer } from './score_counter.js';

let randomNumberBox = document.querySelector(".RandomNumberBox");
let answerBox = document.querySelector(".AnswerBox");

const body = document.body;
const gifUrl = '../../Content/IMG/looped_video.gif'; // Your GIF URL
const staticImageUrl = '../../Content/IMG/looped_video_still.png'; // Your static image URL (paused state)


export function startGame() {
    let progress = localStorage.getItem("progress") ? parseInt(localStorage.getItem("progress")) : 0;
    let score = localStorage.getItem("score") ? parseInt(localStorage.getItem("score")) : 0;
    
    score = 0;
    progress = 0; // Reset the progress

    localStorage.setItem("progress", progress); // Save updated progress
    localStorage.setItem("score", score); // Save updated progress


     // Redirect to a new page 
     window.location.href = "sem_minigame_game_screen.html";

     // Generate and store 10 random numbers
    let randomNumbers = generateRandomNumbers(10);
    // Save the array in localStorage
    localStorage.setItem("randomNumbers", JSON.stringify(randomNumbers));
}

export function generateRandomNumbers(count = 10) {
    let numbers = [];
    
    for (let i = 0; i < count; i++) {
        let number;
        // Generate a unique number according to the conditions
        do {
            number = Math.floor(Math.random() * 90) + 10; // generates a random number between 10 and 99
        } while (
            Math.floor(number / 10) === number % 10 ||  // checks if the tens and ones digits are the same
            number % 10 === 0 ||                        // checks if the ones digit is 0
            numbers.includes(number)                    // checks if the number is already in the array
        );   
        numbers.push(number); // add the number to the array
    }
    return numbers;
}


let currentRandomNumbers = JSON.parse(localStorage.getItem("randomNumbers"));
let option1 = document.querySelector(".option1");
let option2 = document.querySelector(".option2");
// Define the functions outside so you can reference them later
function handleOption1Click() {
    checkAnswer(1);
}

function handleOption2Click() {
    checkAnswer(2);
}

function handleKeyDown(event) {
    if (event.key === "1") {
        checkAnswer(1);
    }
    if (event.key === "2") {
        checkAnswer(2);
    }
}

function enableAnswerButtons() {
    if (option1 && answerBox.style.display === "flex") {

        body.style.backgroundImage = `url('${staticImageUrl}')`;

        // Add event listeners to options
        option1.addEventListener("click", handleOption1Click);
        option2.addEventListener("click", handleOption2Click);

        document.addEventListener("keydown", handleKeyDown);
    }
}

function disableAnswerButtons() {
    if (option1) {
        
        body.style.backgroundImage = `url('${gifUrl}')`;

        // Remove event listeners from options
        option1.removeEventListener("click", handleOption1Click);
        option2.removeEventListener("click", handleOption2Click);

        document.removeEventListener("keydown", handleKeyDown);
    }
}



export function displayRandomNumber(){
    let progress = localStorage.getItem("progress") ? parseInt(localStorage.getItem("progress")) : 0;
    let randomNumberField = document.querySelector(".randomNumber");
    if (randomNumberField) {
        randomNumberField.innerHTML = currentRandomNumbers[progress];
    }
    displayRandomNumberButtons();
}

export function displayRandomNumberButtons () {
    let progress = localStorage.getItem("progress") ? parseInt(localStorage.getItem("progress")) : 0;

    // Get the current numbers for the options
    let number1 = currentRandomNumbers[progress].toString();
    let number2 = currentRandomNumbers[progress].toString();

    // Randomly decide whether to invert number1 or number2
    if (Math.random() < 0.5) {  // 50% chance to invert number1
        // Invert the digits of number1 (e.g., "25" becomes "52")
        number1 = number1.split('').reverse().join('');
    } else {
        // Invert the digits of number2
        number2 = number2.split('').reverse().join('');
    }

    if (option1) {
        // Set the inner HTML of the buttons
        option1.innerHTML = number1;
        option2.innerHTML = number2;
    }
}




export function hideShowElements () {
    showRandomly();
}

// Function to show the box for 1 second at a random time between 3 and 10 seconds
function showRandomly() {
    disableAnswerButtons();
    // Random delay time between 3 and 10 seconds (2000 - 10000 milliseconds)
    let randomDelay = Math.random() * 7000 + 2000;
    // Set timeout to show the box after the random delay
    setTimeout(function() {
        // Show the RandomNumberBox
        randomNumberBox.style.display = 'flex';

        // Hide the box after 1 second (1000 milliseconds)
        setTimeout(function() {
            randomNumberBox.style.display = 'none';

            // Wait for 2 seconds before showing the answerBox
            setTimeout(function() {
                answerBox.style.display = 'flex';
                enableAnswerButtons();
            }, 1500); // 2-second delay before displaying answerBox
        }, 1000); // Hide after 1 second
    }, randomDelay);
}