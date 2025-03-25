let timer;
let countdown;
let targetTime; // Tijdstip waarop de timer op 0 komt

document.getElementById("startBtn").addEventListener("click", startTimer);
document.getElementById("guessBtn").addEventListener("click", checkTiming);

function startTimer() {
    if (timer) return; // Voorkomt dat meerdere timers tegelijk starten

    countdown = Math.floor(Math.random() * 8) + 8; // Getal tussen 8 en 15
    document.getElementById("timer").innerText = countdown;
    
    targetTime = Date.now() + countdown * 1000; // Opslaan wanneer de timer afloopt

    timer = setInterval(() => {
        let timeLeft = Math.ceil((targetTime - Date.now()) / 1000);
        document.getElementById("timer").innerText = timeLeft;

        if (timeLeft <= 0) {
            clearInterval(timer);
            timer = null;
            document.getElementById("timer").innerText = "-"; // Timer verbergen
        }
    }, 1000);
}

function checkTiming() {
    let currentTime = Date.now();
    let diff = Math.abs(currentTime - targetTime) / 1000; // Tijdverschil in seconden

    if (diff <= 1) {
        document.getElementById("result").innerText = "Goed!";
    } else {
        document.getElementById("result").innerText = "Fout!";
    }
}