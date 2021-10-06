var triviaAPI = "https://opentdb.com/api.php?amount=";
var insultAPI = "https://evilinsult.com/generate_insult.php?lang=en&type=json";
var genButton = $("#generate");
var answersEl = [$("#answer-1"), $("#answer-2"), $("#answer-3"), $("#answer-4")];
var timeLeft = 10;
var numQuestions = document.getElementById("quizQNumber");
var difficulty = document.getElementById("quizQDifficulty");
var category = document.querySelector("#quizQCategory");



//This sets the initial display of the game card border to none
document.getElementById("game-card-border").style.display = "none";
//This creates the onclick function which hides the generator box and displays the questions box
    //TODO: adding smoother transition between elements
document.getElementById("generate").onclick = function () {
    document.getElementById("trivia-gen").style.display = "none";
    document.getElementById("game-card-border").style.display = "block";
    console.log("Generator hidden, questions displayed");
}

var downloadTimer = setInterval(function(){
    if (timeLeft <=0) {
        clearInterval(downloadTimer);
        var timeLeftovers = document.getElementById("seconds-left");
        var nextQuestionBut = document.createElement("button");
        nextQuestionBut.textContent = "Next Question";
        timeLeftovers.append(nextQuestionBut)
    } else {
        document.getElementById("seconds-left").innerHTML = timeLeft;
    }
    timeLeft -= 1;
}, 1000);

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
    
}

var displayQuestions = function() {
};

async function getData() {
    let data = await getAPI();
    let newData = data.results.map(x => x);
    console.log(newData);

}

$("#generate").click(function startQuiz(event) {
    event.preventDefault;
    getData();
    downloadTimer;
    displayQuestions();
    checkAnswer();
});

