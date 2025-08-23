export function getBestScore() {
  return localStorage.getItem("bestScore") || null;
}

export function saveBestScore(score) {
  const best = getBestScore();
  if (!best || score < Number(best)) {
    localStorage.setItem("bestScore", score);
  }
}