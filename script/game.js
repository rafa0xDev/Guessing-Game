// game.js
// Logika permainan: angka acak & cek tebakan

let targetNumber = 0;
let attempts = 0;

// fungsi game baru
export function setNewGame() {
    targetNumber = Math.floor(Math.random() * 100) + 1;
    attempts = 0;
    console.log("Permainan baru dimulai! Tebak angka antara 1 dan 100.");
}

// fungsi check tebakan
 export function checkGuess(guess) {
    attempts++;
    if(guess < targetNumber) {
        return { result: "Too low!", attempts };
    } else if(guess > targetNumber) {
        return { result: "Too high!", attempts };
    } else {
        return { result: "Correct!", attempts };
    }
}

// Fungsi: dapatkan jumlah percobaan
export function getAttempts() {
    return attempts;
}
