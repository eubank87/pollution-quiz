// variables needed to reference html elements 
var highScoresList = document.getElementById("highScoresList");
// called high scores from local storage, or called an empty array if no items in local storage to start
var highScores = JSON.parse(localStorage.getItem("highScores")) || [];
// console.log("high scores:", highScores);

// used inner html to create new li elements within the high scores list ul. Used map method to take in the hig scores array and create an li element for each item.
highScoresList.innerHTML = highScores.map(score =>{
    return `<li class="high-score">${score.name} - ${score.score}</li>`;
}).join(""); //used join method to convert to a string
