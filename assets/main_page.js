var triviaAPI = "https://opentdb.com/api.php?amount=";
var insultAPI = "https://evilinsult.com/generate_insult.php?lang=en&type=json";
var genButton = $("#generate");

console.log("hi");

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

var callAPI = function () {
    var numQuestions = $("#quizQNumber").value;
    console.log(numQuestions);
};

$("#generate").click(function startQuiz(event) {
    event.preventDefault;
    console.log("hi");

    setInterval();
    displayQuestions();
    checkAnswer();
});

function displayQuestions(){

}

function checkAnswer(){
    
}