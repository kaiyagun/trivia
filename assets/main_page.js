
var triviaAPI = "https://opentdb.com/api.php?amount=";
// var insultAPI = "https://evilinsult.com/generate_insult.php?lang=en&type=json"; 
var genButton = $("#generate");
var answerButtonsEl = [$("#answer-1"), $("#answer-2"), $("#answer-3"), $("#answer-4")];
var timeLeft = 10;
var numQuestions = document.querySelector("#quizQNumber");
var difficulty = document.querySelector("#quizQDifficulty");
var category = document.querySelector("#quizQCategory");
var currentQ = $("#question");
var newQ = $("#nextQuestionBut");
var correct = $("#allAnswer");
var q1 = $("#answer-1");
var q2 = $("#answer-2");
var q3 = $("#answer-3");
var q4 = $("#answer-4");
var answersEl = $(".answer");


$('.ui.dropdown')
    .dropdown()
    ;



//TODO: adding smoother transition between elements


//This sets the initial display of the game card border to none
$("#game-card-border").css("display", "none")

//this function hides front page and shows cards (which means the title page won't show again until something shows it)
var showQuiz = function () {
    $('.game')
        .transition()
}




var displayQuestions = function () {
};


var getAnswers = function (x) {
    var incor = x.results[0].incorrect_answers;
    var arr = [[x.results[0].correct_answer, "correct"], [incor[0], "incorrect"], [incor[1], "incorrect"], [incor[2], "incorrect"]];
    var i = arr.length, k, temp;      // k is to generate random index and temp is to swap the values
    while (--i > 0) {
        k = Math.floor(Math.random() * (i + 1));
        temp = arr[k];
        arr[k] = arr[i];
        arr[i] = temp;
    }
    q1.html(arr[0][0]);
    q1.attr("value", `${arr[0][1]}`);
    q2.html(arr[1][0]);
    q3.html(arr[2][0]);
    q4.html(arr[3][0]);
    correct.html(`Answer: ${x.results[0].correct_answer}`);
    answersEl.on('click', checkAnswer);
    function checkAnswer(event) {
        event.preventDefault();
        //store text value of element clikced to a varoable named `selectedAnwer`
        var selectedAnswer = event.target.innerText;
        amount = localStorage.getItem("numberQuestions")
        //check selectedAnswer is equal to correctAnswer, if true increase score
        if (selectedAnswer == x.results[0].correct_answer) {
            var currentScore = parseInt(localStorage.getItem("score"));
            console.log("correct")
            currentScore += 10
            localStorage.setItem("score", currentScore);
        }


    }
}

function endGame() {
    var dogUrl = "https://random.dog/woof.json"
    var jokeUrl = ""
    questionsAsk = parseInt(localStorage.getItem("questionsAsked"));
    totalCalc = questionsAsk * 10
    totalScore = parseInt(localStorage.getItem("score"))
    percentageScore = totalScore / totalCalc;
    var gamesPlayed = parseInt(localStorage.getItem("numberGames"))
    if (isNaN(gamesPlayed)) {
        localStorage.setItem("numberGames", 1)
    } else {
        gamesPlayed = gamesPlayed + 1;
        localStorage.setItem("numberGames", `${gamesPlayed}`)
    }
    if (percentageScore >= .6) {
        console.log("yay")
        fetch(dogUrl)
            .then(function (response) {
                return response.json();
            })
            .then(function (data) {
                var check = data.url.indexOf("mp4");
                console.log
                if (check !== -1) {
                    console.log("fuck")
                } else {
                    yay = $("<img>").attr({ "class": "reward", "src": `${data.url}` });
                    $(".fuck").append(yay);
                    console.log(data.url)

                }
            })
    } else if (percentageScore < 0.6) {
        console.log("nooo")
    }
}


var getQuestion = function (x) {
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

                $("#game-card-border").removeClass("visible");
                $("#game-card-border").css("display", "none");
                $("#answer-card-border").css("display", "block");

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

    localStorage.setItem("questionsAsked", `${amount}`);
    localStorage.setItem("numberQuestions", `${amount}`);
    localStorage.setItem("score", 0);

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

