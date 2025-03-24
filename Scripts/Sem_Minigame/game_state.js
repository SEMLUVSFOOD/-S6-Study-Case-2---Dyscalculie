export function startGame() {
    let score = localStorage.getItem("score") ? parseInt(localStorage.getItem("score")) : 0;
    
    score = 0; // Reset the score

    localStorage.setItem("score", score); // Save updated score
}
