let timer;
let countdown;

document.getElementById("startBtn").addEventListener("click", startTimer);

function startTimer() {
    if (timer) return; // Voorkomt dat meerdere timers tegelijk starten

    countdown = Math.floor(Math.random() * 8) + 8; // Getal tussen 8 en 15
    document.getElementById("timer").innerText = countdown;

    timer = setInterval(() => {
        countdown--;
        document.getElementById("timer").innerText = countdown;

        if (countdown <= 0) {
            clearInterval(timer);
            timer = null;
            alert("Timer afgelopen!");
        }
    }, 1000);
}