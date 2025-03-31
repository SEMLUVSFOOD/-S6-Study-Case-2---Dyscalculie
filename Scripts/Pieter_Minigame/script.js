let timer;
let countdown;
let targetTime;
let hasClicked = false;
let timeToAnswer = 1.5; // Maximale tijdsverschil om correct te zijn
let round = 0;
let correctAnswers = 0;
const totalRounds = 3;

const guessBtn = document.getElementById("guessBtn");
const timerDisplay = document.getElementById("timer");
const progressBar = document.getElementById("progressBar");
const finalResultDisplay = document.getElementById("finalResult");
const timeContainer = document.querySelector(".timeContainer"); // De container voor de timer en cirkel

guessBtn.addEventListener("click", checkTiming);

// Start de game automatisch na 3 seconden
window.onload = function() {
    setTimeout(() => {
        startGame();
    }, 3000);
};

// Event listener voor de spatiebalk
document.addEventListener("keydown", function(event) {
    if (event.code === "Space" && !hasClicked) {
        checkTiming();
    }
});

function startGame() {
    round = 0;
    correctAnswers = 0;
    progressBar.style.width = "0%";
    finalResultDisplay.innerText = "";
    startTimer();

    // Start de achtergrond animatie wanneer de timer start
    document.body.style.backgroundImage = "url('/Content/IMG/looped_video.gif')";
}

function startTimer() {
    if (round >= totalRounds) return; // Stop als het maximum aantal rondes is bereikt

    if (timer) clearInterval(timer); // Stop de vorige timer als die er is

    hasClicked = false;
    guessBtn.disabled = false;
    countdown = Math.floor(Math.random() * 8) + 8; // Random getal voor de timer
    timerDisplay.innerText = countdown;
    timerDisplay.style.visibility = "visible"; // Maak de timer zichtbaar bij het starten
    timeContainer.style.visibility = "visible"; // Maak de cirkel zichtbaar bij het starten

    targetTime = Date.now() + countdown * 1000;

    // Start de timer die aftelt
    timer = setInterval(() => {
        let timeLeft = Math.ceil((targetTime - Date.now()) / 1000);

        if (timeLeft > 0) {
            timerDisplay.innerText = timeLeft;
        }

        if (Date.now() >= targetTime) {
            clearInterval(timer);
            timer = null;
            // Verberg de timer en de cirkel als de timer voorbij is
            timerDisplay.style.visibility = "hidden";
            timeContainer.style.visibility = "hidden"; // Verberg de cirkel
        }
    }, 1000);

    // Na 4 seconden de timer verbergen en de image tonen
    setTimeout(() => {
        timerDisplay.style.visibility = "hidden";
        timeContainer.style.visibility = "hidden"; // Verberg de cirkel
        document.body.style.backgroundImage = "url('/Content/IMG/Car_stop_trafficlight.png')";
    }, 2950); // Zorg ervoor dat deze tijd iets korter is dan de timer van 3 seconden
}

function checkTiming() {
    if (hasClicked) return;
    hasClicked = true;
    guessBtn.disabled = true;

    document.body.style.backgroundImage = "url('/Content/IMG/Start_car_drive.gif')";

    let currentTime = Date.now();
    let diff = Math.abs(currentTime - targetTime) / 1000;

    if (diff <= timeToAnswer) {
        correctAnswers++;
    }

    round++; // Ga naar de volgende ronde
    updateProgress();

    if (round < totalRounds) {
        // Start een nieuwe ronde 4 seconden na het klikken op 'Nu!'
        setTimeout(() => {
            startTimer(); // Start een nieuwe timer na 4 seconden
            document.body.style.backgroundImage = "url('/Content/IMG/looped_video.gif')";

            setTimeout(() => {
                timerDisplay.style.visibility = "hidden";
                timeContainer.style.visibility = "hidden"; // Verberg de cirkel
                document.body.style.backgroundImage = "url('/Content/IMG/Car_stop_trafficlight.png')";
            }, 2950);
        }, 4000); // 4 seconden wachten voordat de timer opnieuw start
    } else {
        // Als alle rondes zijn gespeeld, toon het eindresultaat na 2 seconden
        setTimeout(() => {
            showFinalResult();
        }, 2000);
    }
}

function updateProgress() {
    let progressPercentage = (round / totalRounds) * 100;
    progressBar.style.width = `${progressPercentage}%`; // Pas de breedte van de progress bar aan
}

function showFinalResult() {
    // Sla de score op in Local Storage
    localStorage.setItem("gameScore", `${correctAnswers}/${totalRounds}`);

    // Redirect naar de resultatenpagina
    window.location.href = "pieter_minigame_results.html"; 
}
