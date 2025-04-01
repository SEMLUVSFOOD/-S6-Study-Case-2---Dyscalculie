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

let diagnoseText = document.querySelector(".diagnoseText");
let score = localStorage.getItem("gameScore"); // Haal de score op
console.log(score);
if (diagnoseText) {
    switch(true) {
        case (score == '0/3' || score == '1/3'):
            diagnoseText.innerHTML = "Er is een verhoogde kans op dyscalculie, wij raden u sterk aan om naar een expert te gaan.";
            break;
        case (score == '2/3'):
            diagnoseText.innerHTML = "Er is een kans op dyscalculie, wij raden u aan om naar een expert te gaan.";
            break;
        case (score == '3/3'):
            diagnoseText.innerHTML = "Volgens deze test heeft u geen dyscalculie, bij twijfel raden we toch aan om naar een expert te gaan.";
            break;
        default:
            diagnoseText.innerHTML = "Er is geen score....";
    }
}
