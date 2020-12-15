// variables needed to reference html elements we need in js 
var playerName = document.getElementById("playerName");
var saveHighScoreBtn = document.getElementById("saveHighScoreBtn");
var finalScore = document.getElementById("finalScore");

// variables used to save newest score achieved to high scores list
var newestScore = localStorage.getItem("newestScore");
var highScores = JSON.parse(localStorage.getItem("highScores")) || [];
// console.log("high scores:", highScores);
var maxHighScores = 5;

// displaying final score onto the screen
finalScore.innerText = newestScore;

// created event listener for input field to listen for "key up"
playerName.addEventListener("keyup", () =>{
    // console.log("player name:", playerName.value);
    // created conditional so save score button is disabled until input field is filled out
    saveHighScoreBtn.disabled = !playerName.value; 
});

// function used to save high score- called in html for end of game
function saveHighScore(e){
    // console.log("clicked save button"); 
    e.preventDefault();

    // variable to combine new score value with player name
    var score = {
        score: newestScore,
        name: playerName.value
    };
    // console.log("score:", score); 
    // added info to high scores in local storage
    highScores.push(score);
    // console.log("high scores:", highScores); 

    // sorted high scores to display highest score first
    highScores.sort((a, b) => b.score - a.score);
    // spliced high scores array to only display 5 scores total
    highScores.splice(5);

    // updated local storage
    localStorage.setItem("highScore", JSON.stringify(highScores));

    // after high score is saved, we redirect to high scores page
    window.location.assign("highscores.html");
};