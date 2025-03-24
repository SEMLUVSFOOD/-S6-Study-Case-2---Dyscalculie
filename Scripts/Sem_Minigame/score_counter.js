export function scoreIncrease() {
    let score = localStorage.getItem("score") ? parseInt(localStorage.getItem("score")) : 0;
    
    score++; // Increase the score

    // Check if score hits 10, then reset
    if (score >= 10) {
        score = 0; // Reset the score
    }

    localStorage.setItem("score", score); // Save updated score

    // Update the displayed score
    let currentscoreElement = document.querySelector(".currentscore");
    if (currentscoreElement) {
        currentscoreElement.innerText = `Score: ${score}`;
    }
}
