// variables to call different parts of our html page that we want to maipulate.
var quizQuestion = document.getElementById("question");
// used the method Array.from to run the html elements from string to array. Wanted to grab multiple items so used "getElementsByClassName" vs. "getElementById."
var answerSelections = Array.from(document.getElementsByClassName("answerSelection-text"));
console.log(answerSelections);
//variables to call html items for score/question display
var questionTrackerText = document.getElementById("questionTracker");
var scoreCount = document.getElementById("score");

// variable with empty brackets for current question displayed- curly brackets created an object to work with later on
var currentQuestion = {};
// variable to use as conditional for creating delay in between questions. Set to false initially to prevent answers from being selected before next question is displayed
var gamePlay = false;
// variable to track score 
var score = 0;
// variable to track questions 
var questionTracker = 0;
// variable set to empty array for loop to use to generate random questions
var availableQuestions = [];

// variable for quiz questions; set as a set of objects inside of an array
var quizQuestions = [
    {
        question: "What are the 3 main types of pollution humans contribute to every day?",
        choice1: "sugar, fat & salt",
        choice2: "cotton, silk & wool",
        choice3: "land, air & water",
        choice4: "aluminum, steel & titanium",
        answer: 3
    },
    {
        question: "Most air pollution comes from...",
        choice1: "deflated helium balloons",
        choice2: "burning fossil fuels",
        choice3: "large choirs singing all at once",
        choice4: "baking cookies",
        answer: 2
    },
    {
        question: "What is global warming?",
        choice1: "A steady rise in the Earth's average temperature.",
        choice2: "A day we celebrate winter coats.",
        choice3: "A made up hoax by the liberal media.",
        choice4: "An art installation in NYC.",
        answer: 1
    },
    {
        question: "Each year an average of _______ gallons of untreated sewage waste, stormwater and industrail chemical waste are dumped into US water.",
        choice1: "1,000",
        choice2: "80 million",
        choice3: "5",
        choice4: "1.2 trillion",
        answer: 4
    },
    {
        question: "Something small I can do to help pollution is...",
        choice1: "recycle.",
        choice2: "bring my own shopping bags to the grocery store.",
        choice3: "use a reusable water bottle instead of buying a new plastic one every time.",
        choice4: "All of the above.",
        answer: 4
    }
]