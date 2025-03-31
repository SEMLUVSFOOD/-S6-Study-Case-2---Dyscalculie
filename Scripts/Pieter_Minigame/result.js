window.onload = function() {
    let score = localStorage.getItem("gameScore"); // Haal de score op
    if (score) {
        document.getElementById("resultaatDisplay").innerText = `${score}`;
    } else {
        document.getElementById("resultaatDisplay").innerText = "Geen score gevonden.";
    }

    // Voeg event listener toe voor de spatiebalk om opnieuw te spelen
    document.addEventListener("keydown", function(event) {
        if (event.code === "Space") {
            window.location.href = "pieter_minigame.html"; // Ga naar de minigame pagina
        }
    });
};
