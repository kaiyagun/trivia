var triviaAPI = "https://opentdb.com/api.php?amount=";
// var insultAPI = "https://evilinsult.com/generate_insult.php?lang=en&type=json"; 
var genButton = $("#generate");
var answerButtonsEl = [$("#answer-1"), $("#answer-2"), $("#answer-3"), $("#answer-4")];
var timeLeft = 10;

$('.ui.dropdown')
    .dropdown()
    ;

//if you wanna change how much time is left ona  q, then also cahnge in html text value for the seconds-left element
var numQuestions = document.querySelector("#quizQNumber");
var difficulty = document.querySelector("#quizQDifficulty");
var category = document.querySelector("#quizQCategory");
var currentQ = $("#question");
var newQ = $("#nextQuestionBut");
var q1 = $("#answer-1");
var q2 = $("#answer-2");
var q3 = $("#answer-3");
var q4 = $("#answer-4");
var timeLeft = 10;

var answersEl = $(".buttons");
var currentQuestion = 0;
var correctAnswer = $("#allAnswer");
var score = 0;
var correctBonus = 10;
var maxQuestions = 10;
var availableQuestions;

//TODO: adding smoother transition between elements


//This sets the initial display of the game card border to none
$("#game-card-border").css("display", "none")

//this function hides front page and shows cards (which means the title page won't show again until something shows it)
var showQuiz = function () {
    $('.game')
        .transition()
    console.log("Generator hidden, questions displayed");
}

var displayQuestions = function () {
};

answersEl.on('click', ".button", checkAnswer);
function checkAnswer(event){
    event.preventDefault();
    var nextQuestionBut = document.createElement("button");
    nextQuestionBut.textContent = "Next Question";
    timeLeftovers.append(nextQuestionBut);
    var currentScore = JSON.parse(localStorage.getItem(score)||"0");
    if (currentScore === null) {
        localStorage.setItem("score", 0);
    }
    //store text value of element clikced to a varoable named `selectedAnwer`
    var selectedAnswer = event.target.innerText;
    //check selectedAnswer is equal to correctAnswer, if true increase score
    if (selectedAnswer == correct_answer) {
        classToApply = "correct";
        $("#allAnswer").textContent = "Right";
        currentScore +=10
        localStorage.setItem("score", currentScore);
    } else {
        classToApply = "incorrect";
        $("#allAnswer").textContent = "Wrong";
    }
    if (availableQuestions.lenght===0 || timeLeft ===0){
        endGame();
    } else {
        getQuestion();
    }


}

var getAnswers = function (x) {
    var incor = x.results[0].incorrect_answers
    console.log(x.results[0].correct_answer)
    var arr = [[x.results[0].correct_answer, "correct"], [incor[0], "incorrect"], [incor[1], "incorrect"], [incor[2], "incorrect"]];
    var i = arr.length, k, temp;      // k is to generate random index and temp is to swap the values
    while (--i > 0) {
        k = Math.floor(Math.random() * (i + 1));
        temp = arr[k];
        arr[k] = arr[i];
        arr[i] = temp;
    }
    q1.html(arr[0][0]);
    q2.html(arr[1][0]);
    q3.html(arr[2][0]);
    q4.html(arr[3][0]);
}

var getQuestion = function (x) {
    console.log(x)
    v = x.results[0].question;
    currentQ.html(`${x.results[0].question}`);

}

var getAPI = function () {
    var value = category.options[category.selectedIndex].value;
    var challege = difficulty.options[difficulty.selectedIndex].value;
    var url = `${triviaAPI}1&category=${value}&difficulty=${challege}&type=multiple`;
    var amount = localStorage.getItem("numberQuestions");
    if (amount > 0) {
        fetch(url)
            .then(function (response) {
                return response.json();
            })
            .then(function (data) {
                getQuestion(data);
                getAnswers(data);
            })
        var startTimer = setInterval(function () {
            if (timeLeft <= 0) {
                clearInterval(startTimer);
                var secondsLeft = $("#seconds-left");
                secondsLeft.innerHTML = "Time's Up!"
                wrongAnswer();

            } else {
                $("seconds-left").html(`${timeLeft} + " seconds"`);
            }

            timeLeft -= 1;
        }, 1000);
        amount = amount - 1
        localStorage.setItem("numberQuestions", `${amount}`);
        $("#game-card-border").css("display", "");
    } else {
        endGame();
    }
}




genButton.click(function startQuiz(event) {
    event.preventDefault;

    $('.gen')
        .transition({
            onComplete: showQuiz()
        })
    var amount = numQuestions.options[numQuestions.selectedIndex].value;
    localStorage.setItem("numberQuestions", `${amount}`);
    getAPI();
    displayQuestions();
    // showQuiz();
});


$(".answer").click(function () {
    $("#game-card-border").removeClass("visible");
    $("#game-card-border").css("display", "none");
    $("#answer-card-border").css("display", "block");
})

newQ.click(function () {
    $("#answer-card-border").css("display", "none");
    getAPI();
})
//this is for flipping card


function endGame() {
    var catUrl = "https://cataas.com/cat/gif" 
    var jokeUrl = ""
    if(score >= correct_answer.length * 0.7){
        alert = "Good Score";
        fetch(catUrl)
            .then(function (response) {
                return response.json();
            })
    }
    if (score > correct_answer.lenght * 0.4) {
        alert = "Okay Score";
        fetch(jokeUrl)
            .then(function (response) {
                return response.json();
            })
    }else {
        alert = "Bad Score"
    }
}


//COF commented this out for answer-card-border display
//this calls on flipping card function by pressing an answer 
//answerButtonsEl.click(function flipCard(event) {
//    event.preventDefault;
//    console.log("answer button clicked");
//});

// var AnswerSelect = function() {
//     document.getElementById("answers").addEventListener("click", function() {
//         console.log("An answer button was clicked");
//     });
// }
// AnswerSelect();

//answerbuttons--> lead to "flip" function, leads to new card
    //add new card to html 
    // iwns and losses result in different  text/content being displayed


