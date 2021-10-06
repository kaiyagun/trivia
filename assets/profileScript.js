var triviaAPI = "https://opentdb.com/api.php?amount=";
var insultAPI = "https://evilinsult.com/generate_insult.php?lang=en&type=json";
var profilePage = $(".profilePage");
var profileName = $("#name");
var nameField = $(".nameTitle")

// what api to use for reward?



//pseudocode overview
//on load: trivia-gen card is visible, choose paramaters for game, pulls available parameters from localstorage (based on past scores)
//gen button clikc: calls show question (pulls random uestion from api based on chosen parameters)
//on clicking answer: flips card
//on card flip: shows correct answer, reward/insult, and adds to score
//also shows next question button, which calls displayquestion again 
//repeat until end of quiz
//quiz end: prompt for name, saves score and parameter data to localstorage

//on profile load: pulls local storage info and orgasnizes based on page
//loads name (from former prompt) and assigns data to the name





var profileLoad = function () {
    var profileImprovement = $("#improvable");
}

var setttingName = function () {
    profileName.text(localStorage.getItem("userName"));
    if (profileName.text() == "") {
        saveName();
    } else {
        saveName();
    }

}

var pastGames = function () {
    var profileGames = $("#games");
    var games = localStorage.getItem("games");
    if (games == null) {
        profileGames.text("0")
        localStorage.setItem("games", 0)
    }
    else {
        profileGames.text(games)
    }
}

var scoreBoard = function () {
    var profileHighScore = $("#highScores");
    var scores = localStorage.getItem("scores")
    if (scores == null) {
        for (i = 0; i < 10; i++) {
            profileHighScore.append($("<li>"))
        }
    } else if (scores.length > 10) {
        lowScore = scores.pop();
        for (i = 0; i < scores.length; i++) {
            var instance = $("<li>");
            instance.text(scores[i]);
        }
    } else {
        // lowScore = scores.
        for (i = 0; i < scores.length; i++) {
            var instance = $("<li>");
            instance.text(scores[i]);
        }
    }
}

var improvable = function (x) {
    lowestScore = 0;
    if (lowScore < lowestScore) {
        lowestScore = lowScore
    }
}

var topGame = function () {
    var profileTopCatergory = $("#topCatergory");
    bestGame = localStorage
}

var saveName = function () {
    var nameButton = $("<button>").attr("class", "name mini ui button").text("Change user name");
    var saveName = $("<button>").attr("class", "name ui mini button").text("Save Name");
    profileName.append(nameButton);
    nameButton.click(function () {
        profileName.html("");
        var playerForm = $("<div>").attr("class", "ui form");
        var playerField = $("<div>").attr("class", "three wide field");
        var playerInput = $("<input>").attr({
            id: "playerName",
            type: "text",
            placeholder: "playerName"
        })
        nameField.append(playerForm.append(playerField.append(playerInput), saveName))
    })
    saveName.click(function () {
        localStorage.setItem("userName", profileName.text());
        playerInput = $("#playerName")
        var user = playerInput.val();
        if (user !== "") {
            nameField.html("");
            profileName.text(user);
            localStorage.setItem("userName", user)
        }
    })
}

setttingName();
pastGames();
scoreBoard();
profileLoad()

var profileLoad = function () {
    var profilePage = $("#profile");
    console.log(profilePage)
}
