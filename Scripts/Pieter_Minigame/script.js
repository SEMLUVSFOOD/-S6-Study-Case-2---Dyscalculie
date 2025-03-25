let timer;
let countdown;
let targetTime; 
let hasClicked = false; // Voorkomt meerdere klikken per ronde
let timeToAnwser = 1.5;

const startBtn = document.getElementById("startBtn");
const guessBtn = document.getElementById("guessBtn");
const timerDisplay = document.getElementById("timer");
const resultDisplay = document.getElementById("result");

startBtn.addEventListener("click", startTimer);
guessBtn.addEventListener("click", checkTiming);

function startTimer() {
    if (timer) return; // Voorkomt dat meerdere timers tegelijk starten

    hasClicked = false; // Reset klikstatus bij nieuwe ronde
    guessBtn.disabled = false; // Maak de knop weer klikbaar
    countdown = Math.floor(Math.random() * 8) + 8; // Getal tussen 8 en 15
    timerDisplay.innerText = countdown;
    timerDisplay.style.visibility = "visible"; // Timer weer tonen
    resultDisplay.innerText = ""; // Vorig resultaat wissen

    targetTime = Date.now() + countdown * 1000; // Opslaan wanneer de timer afloopt

    timer = setInterval(() => {
        let timeLeft = Math.ceil((targetTime - Date.now()) / 1000);

        if (timeLeft > 0) {
            timerDisplay.innerText = timeLeft;
        }

        if (Date.now() >= targetTime) { // Timer is op 0
            clearInterval(timer);
            timer = null;
        }
    }, 1000);

    // Na 3 seconden de timer verbergen
    setTimeout(() => {
        timerDisplay.style.visibility = "hidden";
    }, 3000);
}

function checkTiming() {
    if (hasClicked) return; // Voorkomt meerdere klikken per ronde
    hasClicked = true; // Zet status op 'geklikt'
    guessBtn.disabled = true; // Schakel de knop uit na eerste klik

    let currentTime = Date.now();
    let diff = Math.abs(currentTime - targetTime) / 1000; // Tijdverschil in seconden

    if (diff <= timeToAnwser) {
        resultDisplay.innerText = "Goed!";
    } else {
        resultDisplay.innerText = "Fout!";
    }

    // Start een nieuwe ronde 4 seconden nadat de speler heeft geklikt
    setTimeout(() => {
        resultDisplay.innerText = ""; // Wis het resultaat
        startTimer(); // Start een nieuwe timer
    }, 4000);
}
