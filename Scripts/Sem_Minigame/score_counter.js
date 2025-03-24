export function progressIncrease() {
    let progress = localStorage.getItem("progress") ? parseInt(localStorage.getItem("progress")) : 0;
    
    progress++; // Increase the score

    // Check if score hits 10, then reset
    if (progress >= 10) {
        progress = 0; // Reset the score
    }

    localStorage.setItem("progress", progress); // Save updated score

    // Update the displayed score
    let currentprogressElement = document.querySelector(".currentprogress");
    if (currentprogressElement) {
        currentprogressElement.innerText = `Progress: ${progress}`;
    }
}
