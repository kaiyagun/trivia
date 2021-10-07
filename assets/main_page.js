var triviaAPI = "https://opentdb.com/api.php?amount=";
// var insultAPI = "https://evilinsult.com/generate_insult.php?lang=en&type=json"; 
var genButton = $("#generate");
var answerButtonsEl = [$("#answer-1"), $("#answer-2"), $("#answer-3"), $("#answer-4")];
var timeLeft = 10;
var nextQuestionBut = $("#nextQuestionBut");

$('.ui.dropdown')
  .dropdown()
;

//if you wanna change how much time is left ona  q, then also cahnge in html text value for the seconds-left element
var numQuestions = document.getElementById("quizQNumber");
var difficulty = document.getElementById("quizQDifficulty");
var category = document.querySelector("#quizQCategory");
var currentQ = document.querySelector("#question");
var q1 = $("#answer-1");
var q2 = $("#answer-2");
var q3 = $("#answer-3");
var q4 = $("#answer-4");
var timeLeft = 10;


//TODO: adding smoother transition between elements



//This sets the initial display of the game card border to none
document.getElementById("game-card-border").style.display = "none";

//this function hides front page and shows cards (which means the title page won't show again until something shows it)
var showQuiz = function () {
    $('.game')
    .transition('fly up');
    console.log("Generator hidden, questions displayed");
}

//function checkAnswer(){
//    var nextQuestionBut = document.createElement("button");
//    nextQuestionBut.textContent = "Next Question";
//    timeLeftovers.append(nextQuestionBut);
//}

//var returnQuiz = function () {
//    $('.game')
//    .transition('fly up');
//    console.log("Answer hidden, questions displayed");
//}

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
    currentQ.innerHTML = x.results[0].question;

}

var getAPI = function () {
    var value = category.options[category.selectedIndex].value;
    var challege = difficulty.options[difficulty.selectedIndex].value;
    var url = `${triviaAPI}1&category=${value}&difficulty=${challege}&type=multiple`;

    fetch(url)
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            getQuestion(data);
            getAnswers(data);
        })
};


genButton.click(function startQuiz(event) {
    event.preventDefault;
    var startTimer = setInterval(function(){
        if (timeLeft <=0) {
            clearInterval(startTimer);
            var secondsLeft = document.getElementById("seconds-left");
            secondsLeft.innerHTML = "Time's Up!"
            wrongAnswer("");
            
        } else {
            document.getElementById("seconds-left").innerHTML = timeLeft + " seconds";
        }
    
        timeLeft -= 1;
    }, 1000);

    $('.gen')
    .transition({
        onComplete : showQuiz()
    })
    var amount = numQuestions.options[numQuestions.selectedIndex].value + 1;
    localStorage.setItem("numberQuestions", `${amount}` );
    getAPI();
    displayQuestions();
    // showQuiz();
});


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

$(".answer").click(function () {
    $("#game-card-border").removeClass("visible");
    $("#game-card-border").css("display", "none");
    console.log($("#answers"));
    answerCard = document.getElementById("answer-card-border")
    answerCard.style.display = "block";
})

$()


// var displayAnswers = function() {
//     document.getElementById("game-card-border").addEventListener("click", function () {
//         document.getElementById("game-card-border").style.display = "none";
//         document.getElementById("answer-card-border").style.display = "block";
//     });
// }
// displayAnswers();
//answerbuttons--> lead to "flip" function, leads to new card
    //add new card to html 
    // iwns and losses result in different  text/content being displayed

        
