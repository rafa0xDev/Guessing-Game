// main.js
// Penghubung antara DOM dan logika game
// Tugas: dengar event tombol, ambil input, panggil fungsi

const input = document.getElementById("guess-input");
const checkBtn = document.getElementById("check-btn");
const resetBtn = document.getElementById("reset-btn");

checkBtn.addEventListener("click", () => {
    const tebakan = Number(input.value);

    if(tebakan < 1 || tebakan > 100) {
        alert("Tebakan harus antara 1 dan 100!");
        return;
    }
})