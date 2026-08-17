let thehientai = 0;

function XemThe() {
    document.getElementById("cauhoi").textContent = card[thehientai].cauhoi;
    document.getElementById("traloi").textContent = "";
}

function HienDapAn() {
    document.getElementById("traloi").textContent = card[thehientai].traloi;
}

function TheTiepTheo() {
    thehientai++;

    if (thehientai >= card.length) {
        thehientai = 0;
    }

    XemThe();
}

XemThe();
