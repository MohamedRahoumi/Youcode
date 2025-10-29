const allCards = document.querySelectorAll(".card");
const scoreDisplay = document.getElementById("score");
const replayBtn = document.getElementById("rejouer");

let firstCard = null;
let secondCard = null;
let canClick = true;
let score = 0;
let pairsFound = 0;


allCards.forEach(card => {
  const randomPos = Math.floor(Math.random() * 12);
  card.style.order = randomPos;
  card.addEventListener("click", handleCardClick);
});

replayBtn.addEventListener("click", () => {
  location.reload();
});

function handleCardClick() {
  if (!canClick || this.classList.contains("flip")) return;
  this.classList.add("flip");
  if (!firstCard) {
    firstCard = this;
    return;
  }
  secondCard = this;
  score++;
  updateScore();
  checkForMatch();
}

function checkForMatch() {
  const img1 = firstCard.firstElementChild.src;
  const img2 = secondCard.firstElementChild.src;

  if (img1 === img2) {
    pairsFound++;
    resetCards();

    if (pairsFound === 6) {
      setTimeout(() => {
        alert(`Bravo vous avez gagne en ${score} tentatives `);
      }, 500);
    }
  } else {
    canClick = false;
    setTimeout(() => {
      firstCard.classList.remove("flip");
      secondCard.classList.remove("flip");
      resetCards();
    }, 1000);
  }
}

function resetCards() {
  firstCard = null;
  secondCard = null;
  canClick = true;
}

function updateScore() {
  scoreDisplay.textContent = `Score : ${score}`;
}
