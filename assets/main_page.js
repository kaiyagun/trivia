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

$("#generate").click(function(event) {
    event.preventDefault;
    console.log("hi");
});

document.getElementById("generate").onclick = function () {
    document.getElementById("trivia-gen").style.display = "none";
    document.getElementById("game-card-border").style.display = "block";   //TODO: needs an additional component that hides "questions" id on page load, and displays "questions" id on click "generate" button
    console.log("trivia generator hidden");
    console.log("question card displayed");        //This console logs correctly, but question card still displayed on main page
}

