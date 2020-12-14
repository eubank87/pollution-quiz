// variables to call different parts of our html page that we want to maipulate.
var quizQuestion = document.getElementById("question");
// used the method Array.from to run the html elements from string to array. Wanted to grab multiple items so used "getElementsByClassName" vs. "getElementById."
var answerSelections = Array.from(document.getElementsByClassName("answerSelection-text"));
// console.log("answer selections:", answerSelections);
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
var quizInformation = [
    {
        question: "What are the 3 main types of pollution humans contribute to every day?",
        answerSelection1: "sugar, fat & salt",
        answerSelection2: "cotton, silk & wool",
        answerSelection3: "land, air & water",
        answerSelection4: "aluminum, steel & titanium",
        answer: 3
    },
    {
        question: "Most air pollution comes from...",
        answerSelection1: "deflated helium balloons",
        answerSelection2: "burning fossil fuels",
        answerSelection3: "large choirs singing all at once",
        answerSelection4: "baking cookies",
        answer: 2
    },
    {
        question: "What is global warming?",
        answerSelection1: "A steady rise in the Earth's average temperature.",
        answerSelection2: "A day we celebrate winter coats.",
        answerSelection3: "A made up hoax by the liberal media.",
        answerSelection4: "An art installation in NYC.",
        answer: 1
    },
    {
        question: "Each year an average of _______ gallons of untreated sewage waste, stormwater and industrail chemical waste are dumped into US water.",
        answerSelection1: "1,000",
        answerSelection2: "80 million",
        answerSelection3: "5",
        answerSelection4: "1.2 trillion",
        answer: 4
    },
    {
        question: "Something small I can do to help pollution is...",
        answerSelection1: "recycle.",
        answerSelection2: "bring my own shopping bags to the grocery store.",
        answerSelection3: "use a reusable water bottle instead of buying a new plastic one every time.",
        answerSelection4: "All of the above.",
        answer: 4
    }
]

// variable for score increase
var scoreIncrease = 10;
// variable for total amount of questions in quiz to display on screen for question tracker
var totalQuestions = 5;

// function to start the game var quizQuestions 
function startGame (){
    // initially set score and question tracker to 0
    questionTracker = 0;
    score = 0;
    // calling the availableQuestions array. Used the spread operator (...) so the quizInformation array can spread it's objects out and then rejoined as an array
    availableQuestions = [...quizInformation];
    // console.log("available questions:", availableQuestions);
    // calling function to generate new question
    generateNewQuestion();
};

function generateNewQuestion(){
    // created conditional so that if there are no more questions in the availableQuestions array or if the question tracker goes above 5(total number of questions), user will be redirected to the end of the game
    if(availableQuestions === 0 || questionTracker >= 5){
        // before redirecting, user score is saved to local storage
        localStorage.setItem("newestScore", score);
        return window.location.assign("end.html");
    };
    // increasing question tracker by 1 with each new question generated and updating text
    questionTracker++;
    questionTrackerText.innerText = questionTracker + "/" + totalQuestions;

    // variable for question index to generate random question from available questions array
    var questionIndex = Math.floor(Math.random() * availableQuestions.length);
    // setting current question to a random index within the availabe questions array
    currentQuestion = availableQuestions[questionIndex];
    quizQuestion.innerText = currentQuestion.question;
    // console.log("quiz question", quizQuestion);

    // following same principle for answer selections usinf forEach method
    answerSelections.forEach(answerSelection =>{
        // variable to reference data-set in html 
        var number = answerSelection.dataset["number"];
        // printing selections to the screen that match with corresponding text 
        answerSelection.innerText = currentQuestion["answerSelection" + number];
    });
    // splicing out question that was used so it doesn't repeat
    availableQuestions.splice(questionIndex, 1);
    // Now that question is loaded, set gamePlay to true
    gamePlay = true;
};

// using forEach method again to add an event listener to each answer selection
answerSelections.forEach(answerSelection =>{
    answerSelection.addEventListener("click", e =>{
        // conditional to ignore event listener until game play is allowed
        if(!gamePlay){
            return
        };
        gamePlay = false;

        // variables added so click event can be interpreted as user's answer and then verified further down. use dataset from html to track
        var chosenSelection = e.target;
        var chosenAnswer = chosenSelection.dataset["number"];

        // variable to apply color depending on right/wrong answer
        var rightOrWrong = "wrong";
        // conditional so if answer selected is right, default state of wrong is changed along with corresponding background color from css styling and score is increased
        if(chosenAnswer == currentQuestion.answer){
            rightOrWrong = "right";
            increaseScore(scoreIncrease);
        };
        // console.log("right or wrong", rightOrWrong);

        // apply class change listed above to parent element of chosenSelection
        chosenSelection.parentElement.classList.add(rightOrWrong);
        // remove class change when a new question is generated with small delay so it's noticable
        setTimeout(() => {
            chosenSelection.parentElement.classList.remove(rightOrWrong);
            generateNewQuestion();
        }, 400);
        // console.log(chosenAnswer == currentQuestion.answer);
    })
})


startGame();