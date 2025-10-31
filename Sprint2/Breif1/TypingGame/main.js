const phrase = "La programmation est un art qui combine la logique et la creativiter Chaque ligne de code ecrite represente une idee transformee en action Pour devenir un bon programmeur il faut de la patience de la pratique";
const textEl = document.querySelector(".text");
const inputEl = document.getElementById("input");
const timeEl = document.querySelector(".time");
const wpmEl = document.querySelector(".wpm");
let timer = null;
let timeLeft = 60;
let started = false;

phrase.split("").forEach(char => {
  const span = document.createElement("span");
  span.textContent = char;
  textEl.appendChild(span);
});

const spans = document.querySelectorAll("span");

function startTimer() {
  timeEl.textContent = `Time : ${timeLeft}s`;
  timer = setInterval(() => {
    timeLeft--;
    timeEl.textContent = `Time : ${timeLeft}s`;
    
    if (timeLeft <= 0) {
      clearInterval(timer);
      inputEl.disabled = true;
      afficherWPM();
    }
  }, 1000);
}

function afficherWPM() {
  const texteTape = inputEl.value;
  let caracteresCorrects = 0;
  
  for (let i = 0; i < texteTape.length; i++) {
    if (texteTape[i] === phrase[i]) {
      caracteresCorrects++;
    }
  }
  
  const tempsMinutes = 60 / 60;
  const wpm = Math.round((caracteresCorrects / 5) / tempsMinutes);
  
  wpmEl.textContent = `Wpm : ${wpm}`;
}

