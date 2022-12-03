let homeScore = document.getElementById("homeScore-el")
let guestScore = document.getElementById("guestScore-el")

let leadingTeam = document.getElementById("leaderboard")

let homeCount = 0;
let guestCount = 0;

function add1Home() {
    homeCount +=1;
    homeScore.textContent = homeCount;
}

function add2Home() {
    homeCount +=2;
    homeScore.textContent = homeCount;
}

function add3Home() {
    homeCount +=3;
    homeScore.textContent = homeCount;
}

function add1Guest() {
    guestCount +=1;
    guestScore.textContent = guestCount;
}

function add2Guest() {
    guestCount +=2;
    guestScore.textContent = guestCount;
}

function add3Guest() {
    guestCount +=3;
    guestScore.textContent = guestCount;
}

function findWinner() {
    if (homeScore > guestScore) {
        leadingTeam.textContent = "home team wins"
    }

    if (homeScore < guestScore) {
        leadingTeam.textContent = "guest team wins"
    }

}

function restartGame() {
    homeCount = 0;
    homeScore.textContent = 0;
    guestCount = 0;
    guestScore.textContent = 0;
}
