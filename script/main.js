// main.js
// Penghubung antara DOM dan logika game
// Tugas: dengar event tombol, ambil input, panggil fungsi

const input = document.getElementById("guess-input");
const checkBtn = document.getElementById("check-btn");
const resetBtn = document.getElementById("reset-btn");
const messageEl = document.getElementById("message");
const attemptsEl = document.getElementById("attempts");

let targetNumber = 0;
let attempts = 0;

function startGame() {
    targetNumber = Math.floor(Math.random() * 100) + 1;
    attempts = 0;
    attemptsEl.textContent = attempts;
    messageEl.textContent = "answer your guess";
    messageEl.style.color = "#e0f7ff";
    input.value = "";
    input.focus();
}

checkBtn.addEventListener("click", () => {
    const tebakan = Number(input.value);

    if(tebakan < 1 || tebakan > 100 || isNaN(tebakan)) {
        messageEl.textContent = "Please enter a valid number between 1 and 100!";
        return;
    }

    attempts++
    attemptsEl.textContent = attempts;

    if(tebakan < targetNumber) {
        messageEl.textContent = "Too low!";
        messageEl.style.color = "#ffa64d";
    } else if(tebakan > targetNumber) {
        messageEl.textContent = "Too high!";
         messageEl.style.color = "#ffa64d";
    } else {
        messageEl.textContent = "Congratulations! You guessed it!";
        messageEl.style.color = "#4ade80";
        input.disabled = true;
        checkBtn.disabled = true;
    }

    input.value = "";
    input.focus();
});

resetBtn.addEventListener("click", () => {
    input.disabled = false;
    checkBtn.disabled = false;
    startGame();
});

window.addEventListener("DOMContentLoaded", function () {
  startGame();
});