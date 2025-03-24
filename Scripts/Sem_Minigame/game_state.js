export function startGame() {
    let score = localStorage.getItem("score") ? parseInt(localStorage.getItem("score")) : 0;
    
    score = 0; // Reset the score

    localStorage.setItem("score", score); // Save updated score

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
