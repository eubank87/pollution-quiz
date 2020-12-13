// created variables to call different parts of our html page that we want to maipulate.
var quizQuestion = document.getElementById("question");
// used the method Array.from to run the html elements from string to array. Wanted to grab multiple items so used "getElementsByClassName" vs. "getElementById."
var answerSelections = Array.from(document.getElementsByClassName("answerSelection-text"));
console.log(answerSelections);
// created variables to call html items for score/question display
var questionTrackerText = document.getElementById("questionTracker");
var scoreCount = document.getElementById("score");


