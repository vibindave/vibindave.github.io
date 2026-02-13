let unused = [];
let currentAnswer = "";

function shuffleWord(word) {
  const chars = word.replace(/ /g, "").split("");
  for (let i = chars.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [chars[i], chars[j]] = [chars[j], chars[i]];
  }
  return chars.join(" ");
}

function getSource() {
  const mode = document.getElementById("mode").value;
  return mode === "movies" ? MOVIES : PEOPLE;
}

function resetGame() {
  unused = [];
  currentAnswer = "";
  document.getElementById("jumble").innerText = "CLICK START";
  document.getElementById("answer").innerText = "";
}

function nextWord() {
  const source = getSource();

  if (unused.length === 0) {
    unused = [...source]; // refill when exhausted
  }

  const index = Math.floor(Math.random() * unused.length);
  currentAnswer = unused.splice(index, 1)[0];

  document.getElementById("jumble").innerText =
    shuffleWord(currentAnswer.toUpperCase());
  document.getElementById("answer").innerText = "";
}

function reveal() {
  if (!currentAnswer) return;
  document.getElementById("answer").innerText = "✅ " + currentAnswer;
}
