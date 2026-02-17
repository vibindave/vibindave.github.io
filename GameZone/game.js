let unused = [];
let currentAnswer = "";

let revealed = [];
let remainingLetters = [];

/* ================= UTIL ================= */

function shuffle(arr) {
  return arr
    .map(v => ({ v, r: Math.random() }))
    .sort((a, b) => a.r - b.r)
    .map(x => x.v);
}

function getSource() {
  const mode = document.getElementById("mode").value;
  return mode === "movies" ? MOVIES : PEOPLE;
}

function buildDisplay() {
  const temp = [...remainingLetters];
  return revealed
    .map(ch => (ch === "_" ? temp.shift() : ch))
    .join(" ");
}

/* ================= GAME FLOW ================= */

function resetGame() {
  unused = [];
  currentAnswer = "";
  revealed = [];
  remainingLetters = [];

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

  const answerUpper = currentAnswer.toUpperCase();

  revealed = answerUpper
    .split("")
    .map(ch => (ch === " " ? " " : "_"));

  remainingLetters = shuffle(
    answerUpper.replace(/ /g, "").split("")
  );

  document.getElementById("jumble").innerText = buildDisplay();
  document.getElementById("answer").innerText = "";
}

/* ================= HINT LOGIC ================= */

function hint() {
  if (!currentAnswer) return;

  const answerUpper = currentAnswer.toUpperCase();

  for (let i = 0; i < answerUpper.length; i++) {
    if (answerUpper[i] !== " " && revealed[i] === "_") {
      revealed[i] = answerUpper[i];

      const idx = remainingLetters.indexOf(answerUpper[i]);
      if (idx > -1) remainingLetters.splice(idx, 1);

      break;
    }
  }

  document.getElementById("jumble").innerText = buildDisplay();
}

/* ================= REVEAL ================= */

function reveal() {
  if (!currentAnswer) return;
  document.getElementById("answer").innerText =
    "✅ " + currentAnswer;
}
