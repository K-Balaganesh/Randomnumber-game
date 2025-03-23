var guessnumber = document.getElementById("guessnumber");
var result = document.getElementById("result");
var score = document.getElementById("score");
var overlay = document.getElementById("overlay");
var celebration = document.getElementById("celebration");
var finalscore = document.getElementById("finalscore");

var randomnumber = Math.floor(Math.random() * 10) + 1;
var totalscore = 10;

function showOverlay() {
    overlay.style.display = "flex";
    setTimeout(() => {
        overlay.style.display = "none";
    }, 800);
}

function showCelebration() {
    celebration.style.display = "flex";
}

function check() {
    var enternumber = parseInt(guessnumber.value);

    // Validate input
    if (isNaN(enternumber) || enternumber < 1 || enternumber > 10) {
        alert("Please enter a valid number between 1 and 10!");
        return;
    }

    if (enternumber === randomnumber) {
        result.textContent = "Right";
        score.textContent = "Score: " + totalscore;
        finalscore.textContent = totalscore;
        showCelebration();
    } else {
        totalscore--;
        result.textContent = "Wrong";
        score.textContent = "Score: " + totalscore;
        showOverlay();
    }
}

function nextRound() {
    // Refresh the page for the next round
    window.location.reload();
}