let timer;
let countdown;
let targetTime;
let hasClicked = false;
let timeToAnswer = 1.5; // Maximale tijdsverschil om correct te zijn
let round = 0;
let correctAnswers = 0;
const totalRounds = 3;

const startBtn = document.getElementById("startBtn");
const guessBtn = document.getElementById("guessBtn");
const timerDisplay = document.getElementById("timer");
const progressBar = document.getElementById("progressBar");
const finalResultDisplay = document.getElementById("finalResult");

startBtn.addEventListener("click", startGame);
guessBtn.addEventListener("click", checkTiming);

    // Na 3 seconden de timer verbergen
    setTimeout(() => {
        startGame();
    }, 3000);

function startGame() {
    round = 0;
    correctAnswers = 0;
    progressBar.style.width = "0%";
    finalResultDisplay.innerText = "";
    startTimer();

    // Start de achtergrond animatie wanneer de timer start
    changeBackgroundToGif();
}

function startTimer() {
    console.log("in start timer functie");
    if (round >= totalRounds) return; // Stop als het maximum aantal rondes is bereikt

    if (timer) clearInterval(timer); // Stop de vorige timer als die er is

    hasClicked = false;
    guessBtn.disabled = false;
    countdown = Math.floor(Math.random() * 8) + 8; // Random getal voor de timer
    timerDisplay.innerText = countdown;
    timerDisplay.style.visibility = "visible"; // Maak de timer zichtbaar bij het starten

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
        }
    }, 1000);

   
    // Na 4 seconden de timer verbergen en de image tonen
    setTimeout(() => {
        timerDisplay.style.visibility = "hidden";
        document.body.style.backgroundImage = "url('/Content/IMG/Car_stop_trafficlight.png')";
    }, 3000);

    
}

function changeBackgroundToGif() {
    // Verander de achtergrond naar de GIF
    document.body.style.backgroundImage = "url('/Content/IMG/looped_video.gif')";

}

function checkTiming() {
    console.log("in check timer functie");
    if (hasClicked) return;
    hasClicked = true;
    guessBtn.disabled = true;

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
            console.log("in reset functie");
        }, 4000); // 4 seconden wachten voordat de timer opnieuw start
    } else {
        // Als alle rondes zijn gespeeld, toon het eindresultaat na 2 seconden
        setTimeout(() => {
            showFinalResult();
        }, 2000);
    }

    // Start de achtergrond animatie weer wanneer 'Nu!' is gedrukt
    document.body.style.animationPlayState = "running";
}

function updateProgress() {
    let progressPercentage = (round / totalRounds) * 100;
    progressBar.style.width = progressPercentage + "%";
}

function showFinalResult() {
    finalResultDisplay.innerText = `Je hebt ${correctAnswers}/${totalRounds} goed beantwoord!`;
}
