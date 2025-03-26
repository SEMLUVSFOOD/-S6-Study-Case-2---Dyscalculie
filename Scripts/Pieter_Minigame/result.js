window.onload = function() {
    let score = localStorage.getItem("gameScore"); // Haal de score op
    if (score) {
        document.getElementById("resultaatDisplay").innerText = `Je score: ${score}`;
    } else {
        document.getElementById("resultaatDisplay").innerText = "Geen score gevonden.";
    }
};
