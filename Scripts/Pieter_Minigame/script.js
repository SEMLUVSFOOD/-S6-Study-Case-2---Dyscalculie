let timer;
let countdown;
let targetTime; // Tijdstip waarop de timer op 0 komt

document.getElementById("startBtn").addEventListener("click", startTimer);
document.getElementById("guessBtn").addEventListener("click", checkTiming);

function startTimer() {
    if (timer) return; // Voorkomt dat meerdere timers tegelijk starten

    countdown = Math.floor(Math.random() * 8) + 8; // Getal tussen 8 en 15
    document.getElementById("timer").innerText = countdown;
    document.getElementById("timer").style.visibility = "visible"; // Zorgt ervoor dat hij zichtbaar is bij een nieuwe start

    targetTime = Date.now() + countdown * 1000; // Opslaan wanneer de timer afloopt

    timer = setInterval(() => {
        let timeLeft = Math.ceil((targetTime - Date.now()) / 1000);

        if (timeLeft > 0) {
            document.getElementById("timer").innerText = timeLeft;
        }

        if (Date.now() >= targetTime) { // Timer is op 0
            clearInterval(timer);
            timer = null;
        }
    }, 1000);

    // Na 2 seconden de timer verbergen, maar hij blijft doortellen
    setTimeout(() => {
        document.getElementById("timer").style.visibility = "hidden";
    }, 2000);
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