import { progressIncrease } from './score_counter.js';

export function startGame() {
    let progress = localStorage.getItem("progress") ? parseInt(localStorage.getItem("progress")) : 0;
    
    progress = 0; // Reset the score

    localStorage.setItem("progress", progress); // Save updated score

     // Redirect to a new page (change 'game.html' to the correct file)
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
        do {
            number = Math.floor(Math.random() * 90) + 10; // generates a random number between 10 and 99
        } while (Math.floor(number / 10) === number % 10 || number % 10 === 0); // checks if the tens and ones digits are the same or the ones digit is 0
        numbers.push(number); // add the number to the array
    }
    
    return numbers;
}


let currentRandomNumbers = JSON.parse(localStorage.getItem("randomNumbers"));
let option1 = document.querySelector(".option1");
let option2 = document.querySelector(".option2");

if(option1) {
    // Add event listeners to options
    option1.addEventListener("click", () => progressIncrease());
    option2.addEventListener("click", () => progressIncrease());   
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