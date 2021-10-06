var triviaAPI = "https://opentdb.com/api.php?amount=";
var insultAPI = "https://evilinsult.com/generate_insult.php?lang=en&type=json";
var genButton = $("#generate");
var answersEl = [$("#answer-1"), $("#answer-2"), $("#answer-3"), $("#answer-4")];
var numQuestions = document.getElementById("quizQNumber");
var difficulty = document.getElementById("quizQDifficulty");
var category = document.querySelector("#quizQCategory");
var currentQ = document.querySelector("#question");
var q1 = document.querySelector("#answer-1");
var q2 = document.querySelector("#answer-2");
var q3 = document.querySelector("#answer-3");
var q4 = document.querySelector("#answer-4");
var timeLeft = 10;




//This sets the initial display of the game card border to none
document.getElementById("game-card-border").style.display = "none";
//This creates the onclick function which hides the generator box and displays the questions box
//TODO: adding smoother transition between elements

downloadTimer = setInterval(function () {
    if (timeLeft <= 0) {
        clearInterval(downloadTimer)
        var timeLeftovers = document.getElementById("seconds-left");
    } else {
        document.getElementById("seconds-left").innerHTML = timeLeft;
    }
    timeLeft -= 1;
}, 1000);



function checkAnswer() {

}

var displayQuestions = function () {
};


var getAnswers = function (x) {
    var incor = x.results[0].incorrect_answers
    console.log(x.results[0].correct_answer)
    var arr = [x.results[0].correct_answer, incor[0], incor[1], incor[2]]
    var i = arr.length, k, temp;      // k is to generate random index and temp is to swap the values
    while (--i > 0) {
        k = Math.floor(Math.random() * (i + 1));
        temp = arr[k];
        arr[k] = arr[i];
        arr[i] = temp;
    }
    q1.textContent = arr[0];
    q2.textContent = arr[1];
    q3.textContent = arr[2];
    q4.textContent = arr[3];
}

var getQuestion = function (x) {
    console.log(x)
    v = x.results[0].question;
    currentQ.textContent = x.results[0].question;

}

var getAPI = function () {
    var value = category.options[category.selectedIndex].value;
    var amount = numQuestions.options[numQuestions.selectedIndex].value;
    var challege = difficulty.options[difficulty.selectedIndex].value;
    var url = `${triviaAPI}${amount}&category=${value}&difficulty=${challege}&type=multiple`;

    fetch(url)
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            getQuestion(data);
            getAnswers(data);
        })
};


$("#generate").click(function startQuiz(event) {
    document.getElementById("trivia-gen").style.display = "none";
    document.getElementById("game-card-border").style.display = "block";
    console.log("Generator hidden, questions displayed");
    event.preventDefault;
    getAPI();
    displayQuestions();
    checkAnswer();
});

