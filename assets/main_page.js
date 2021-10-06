var triviaAPI = "https://opentdb.com/api.php?amount=";
// var insultAPI = "https://evilinsult.com/generate_insult.php?lang=en&type=json"; 
var genButton = $("#generate");
var answerButtonsEl = [$("#answer-1"), $("#answer-2"), $("#answer-3"), $("#answer-4")];
var timeLeft = 10;

$('.ui.dropdown')
  .dropdown()
;

//if you wanna change how much time is left ona  q, then also cahnge in html text value for the seconds-left element
var numQuestions = document.getElementById("quizQNumber");
var difficulty = document.getElementById("quizQDifficulty");
var category = document.querySelector("#quizQCategory");
var currentQ = document.querySelector("#question");
var q1 = document.querySelector("#answer-1");
var q2 = document.querySelector("#answer-2");
var q3 = document.querySelector("#answer-3");
var q4 = document.querySelector("#answer-4");
var timeLeft = 10;


//TODO: adding smoother transition between elements


//This sets the initial display of the game card border to none
document.getElementById("game-card-border").style.display = "none";

//this function hides front page and shows cards (which means the title page won't show again until something shows it)
var showQuiz = function () {
    $('.game')
    .transition()
    console.log("Generator hidden, questions displayed");
}


function checkAnswer(){
    var nextQuestionBut = document.createElement("button");
    nextQuestionBut.textContent = "Next Question";
    timeLeftovers.append(nextQuestionBut);
    
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



genButton.click(function startQuiz(event) {
    event.preventDefault;
    var startTimer = setInterval(function(){
        if (timeLeft <=0) {
            clearInterval(startTimer);
            var secondsLeft = document.getElementById("seconds-left");
            secondsLeft.innerHTML = "Time's Up!"
            wrongAnswer();
            
        } else {
            document.getElementById("seconds-left").innerHTML = timeLeft + " seconds";
        }
    
        timeLeft -= 1;
    }, 1000);

    $('.gen')
    .transition({
        onComplete : showQuiz()
    })
    getData();
    displayQuestions();
    // showQuiz();
});


//this is for flipping card 


//this calls on flipping card function by pressing an answer 
answerButtonsEl.click(function flipCard(event) {
    event.preventDefault;
    console.log("answer button clicked");
});

//answerbuttons--> lead to "flip" function, leads to new card
    //add new card to html 
    // iwns and losses result in different  text/content being displayed

        