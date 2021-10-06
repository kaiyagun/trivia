var triviaAPI = "https://opentdb.com/api.php?amount=";
var insultAPI = "https://evilinsult.com/generate_insult.php?lang=en&type=json";
var genButton = $("#generate");
var answersEl = [$("#answer-1"), $("#answer-2"), $("#answer-3"), $("#answer-4")];

var numQuestions = document.getElementById("quizQNumber");
var difficulty = document.getElementById("quizQDifficulty");
var category = document.querySelector("#quizQCategory");



console.log("hi");

//This sets the initial display of the game card border to none
document.getElementById("game-card-border").style.display = "none";
//This creates the onclick function which hides the generator box and displays the questions box
    //TODO: adding smoother transition between elements
document.getElementById("generate").onclick = function () {
    document.getElementById("trivia-gen").style.display = "none";
    document.getElementById("game-card-border").style.display = "block";
    console.log("Generator hidden, questions displayed");
}


var timeLeft = 10;
var downloadTimer = setInterval(function(){
    if (timeLeft <=0) {
        clearInterval(downloadTimer);
        document.getElementById("seconds-left").innerHTML = "next question";
    } else {
        document.getElementById("seconds-left").innerHTML = timeLeft;
    }
    timeLeft -= 1;
}, 1000);




function displayQuestions(){

}

function checkAnswer(){
    
}


https://opentdb.com/api.php?amount=10&category=23&difficulty=easy&type=multiple


var displayQuestions = function() {
    console.log(getAPI);
};

$("#generate").click(function startQuiz(event) {
    event.preventDefault;
    console.log("hi");
    getAPI();
    setInterval();
    displayQuestions();
    checkAnswer();
});
https://opentdb.com/api.php?amount=4&category=23&difficulty=meadium


var getAPI = function() {
    var value = category.options[category.selectedIndex].value;
    var amount = numQuestions.options[numQuestions.selectedIndex].value;
    var challege = difficulty.options[difficulty.selectedIndex].value;
    var url = `${triviaAPI}${amount}&category=${value}&difficulty=${challege}`;

    console.log(url);
    

    fetch(url)
    .then(function (response) {
        if (response.ok) {

            response.json().then(results => {
                console.log(results);
                });
            };
        })
    .catch(error => {
        console.log("fail" + error);
    })

};
