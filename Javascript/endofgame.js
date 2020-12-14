// variables needed to reference html elements we need in js 
var playerName = document.getElementById("playerName");
var saveHighScoreBtn = document.getElementById("saveHighScoreBtn");
var finalScore = document.getElementById("finalScore");

// variables used to save newest score achieved to high scores list
var newestScore = localStorage.getItem("newestScore");
var highScores = JSON.parse(localStorage.getItem("highScores")) || [];
console.log("high scores:", highScores);
var maxHighScores = 5;
