var questions = [
    {
        title: "",
        choices: [],
        answer: ""
    },
    {

    }
]

var questionsEl = document.getElementById("questions");
var currentQuestionIndex = 0;

function practice(){
    var currentQuestion = questions[currentQuestionIndex];
    questionsEl.textContent = currentQuestion.title;
}

practice();
// function to start quiz --- will hide once quiz starts and then questions will show.
//  inside start quiz function: questionsEl.removeAttribute("hide") so then questions start to show.
// function that cycles through question array --- inside of start quiz function 
// function for verification of answer --- inside of the function for questions
// function for timer/Score --- written alone, but called inside of start quiz function.
// function for when quiz ends --- seperate but at the end
// function to save high scores to local storage --- div with class wrapper around to hide until end and then a div inside for input from user.