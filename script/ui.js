export function displayMessage(text, color = "#e0f7ff") {
    const messageEl = document.getElementById("message");
    messageEl.textContent = text;
    messageEl.style.color = color;
}

export function updateAttempts(count) {
    const attemptsEl = document.getElementById("attempts");
    attemptsEl.textContent = count;
}

export function resetDisplay() {
  const input = document.getElementById("guess-input");
  input.value = "";
  input.disabled = false;
  input.focus();
  
  // Reset message
  displayMessage("Answer your guess", "#e0f7ff");
}