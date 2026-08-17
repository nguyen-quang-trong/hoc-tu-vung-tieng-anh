let currentCard = 0;

function XemThe() {
    document.getElementById("question").textContent =
        cards[currentCard].question;

    document.getElementById("answer").textContent = "";
}

function HienTraLoi() {
    document.getElementById("answer").textContent =
        cards[currentCard].answer;
}

function TheTiep() {
    currentCard++;

    if (currentCard >= cards.length) {
        currentCard = 0;
    }

    showCard();
}

XemThe();
