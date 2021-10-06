var triviaAPI = "https://opentdb.com/api.php?amount=";
// var insultAPI = "https://evilinsult.com/generate_insult.php?lang=en&type=json"; 
var genButton = $("#generate");
var answerButtonsEl = [$("#answer-1"), $("#answer-2"), $("#answer-3"), $("#answer-4")];
var timeLeft = 10;


//if you wanna change how much time is left ona  q, then also cahnge in html text value for the seconds-left element
var numQuestions = document.getElementById("quizQNumber");
var difficulty = document.getElementById("quizQDifficulty");
var category = document.querySelector("#quizQCategory");

//TODO: adding smoother transition between elements


//This sets the initial display of the game card border to none
document.getElementById("game-card-border").style.display = "none";

//this function hides front page and shows cards (which means the title page won't show again until something shows it)
var showQuiz = function () {
    document.getElementById("trivia-gen").style.display = "none";
    document.getElementById("game-card-border").style.display = "block";
    console.log("Generator hidden, questions displayed");
}

async function getAPI() {
    var value = category.options[category.selectedIndex].value;
    var amount = numQuestions.options[numQuestions.selectedIndex].value;
    var challege = difficulty.options[difficulty.selectedIndex].value;
    var url = `${triviaAPI}${amount}&category=${value}&difficulty=${challege}&type=multiple`;

        try {
            let res = await fetch(url);
            return await res.json();
        } catch (error) {
            console.log(error);
        }

};

function checkAnswer(){
    var nextQuestionBut = document.createElement("button");
    nextQuestionBut.textContent = "Next Question";
    timeLeftovers.append(nextQuestionBut);
    
}

var displayQuestions = function() {
};

async function getData() {
    let data = await getAPI();
    let newData = data.results.map(x => x);
    console.log(newData);

}

var wrongAnswer = function() {
    //wrong asnwer function here, already linked to end of timer

    console.log("times up");
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

    getData();
    displayQuestions();
    showQuiz();
});


//this is for flipping card 


//this calls on flipping card function by pressing an answer 
answerButtonsEl.click(function flipCard(event) {
    event.preventDefault;
    console.log("answer button clicked");
});

