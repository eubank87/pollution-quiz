// variables needed to reference html elements 
var highScoresList = document.getElementById("highScoresList");
// called high scores from local storage, or called an empty array if no items in local storage to start
var highScores = JSON.parse(localStorage.getItem("highScores")) || [];