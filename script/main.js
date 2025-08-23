// main.js
// Penghubung antara DOM dan logika game
// Tugas: dengar event tombol, ambil input, panggil fungsi

import { setNewGame, checkGuess, getAttempts } from "./game.js";
import { displayMessage, updateAttempts, resetDisplay } from "./ui.js";
import { getBestScore, saveBestScore } from "./storage.js";

const input = document.getElementById("guess-input");
const checkBtn = document.getElementById("check-btn");
const resetBtn = document.getElementById("reset-btn");
const bestScoreEl = document.getElementById("best-score");

function updateBestScoreDisplay() {
  const best = getBestScore();
  bestScoreEl.textContent = best ? best : "-";
}

function startGame() {
  setNewGame();
  resetDisplay();
  updateAttempts(0);
  updateBestScoreDisplay();
  checkBtn.disabled = false;
}

checkBtn.addEventListener("click", () => {
  const guess = Number(input.value);
  if (guess < 1 || guess > 100 || isNaN(guess)) {
    displayMessage("Masukkan angka 1-100!", "#ff4d4d");
    return;
  }
  const { result, attempts } = checkGuess(guess);
  updateAttempts(attempts);

  if (result === "Too low!") {
    displayMessage("Terlalu rendah!", "#ffa64d");
  } else if (result === "Too high!") {
    displayMessage("Terlalu tinggi!", "#ffa64d");
  } else {
    displayMessage("Selamat! Kamu benar!", "#4ade80");
    input.disabled = true;
    checkBtn.disabled = true;
    saveBestScore(attempts);
    updateBestScoreDisplay();
  }
  input.value = "";
  input.focus();
});

resetBtn.addEventListener("click", () => {
  input.disabled = false;
  startGame();
});

window.addEventListener("DOMContentLoaded", startGame);