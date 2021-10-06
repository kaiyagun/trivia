var triviaAPI = "https://opentdb.com/api.php?amount=";
var insultAPI = "https://evilinsult.com/generate_insult.php?lang=en&type=json";
var genButton = $("#generate");
var answersEl = [$("#answer-1"), $("#answer-2"), $("#answer-3"), $("#answer-4")];

var numQuestions = document.getElementById("quizQNumber");
var difficulty = document.getElementById("#quizQDifficulty");
var category = document.getElementById("#quizQCategory");



console.log("hi");

//This sets the initial display of the game card border to none
document.getElementById("game-card-border").style.display = "none";
//This creates the onclick function which hides the generator box and displays the questions box
    //TODO: adding smoother transition between elements
document.getElementById("generate").onclick = function () {
    document.getElementById("trivia-gen").style.display = "none";
    document.getElementById("game-card-border").style.display = "block";
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
    getAPI();



var getAPI = function() {
    var url = triviaAPI + numQuestions + "&category=" + category.val() + "&difficulty=" + difficulty;

    console.log(url);
    

    if (numQuestions === null || category === null || difficulty === null) {
        //error message here, fields must have a value
    };

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

var displayQuestions = function() {
    console.log(getAPI);
};


    
