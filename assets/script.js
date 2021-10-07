yeet 



//Answer side of "#game-card-border"
//WHEN user clicks on an answer button
//THEN the question card flips (transitions) to the answer side which displays all answers and a "next question" button
    //TODO: addEventListener for any answer button
        //TODO: document.getElementByClass(ADD NEW CLASS?).addEventListener("click", function() { document.getElementByClass(ui vertical buttons).innerHTML = ""
        //TODO: 
    //TODO: display all answers
        //TODO: document.getElementById("ui button").style.display = "block"
    //TODO: display next question button
        //TODO: document.getElementByID("nextQuestionBut").style.display = "block"
//IF correct answer is chosen
//THEN user receives a prompt of "correct!" and chosen answer is highlighted in green
    //TODO: addEventListener for correct answer
        //TODO: 
    //TODO: change display color of correct button to green
//ELSE wrong answer is chosen
//THEN user receives a prompt of "WRONG!" and incorrect answers are highlighted in red AND correct answer highlighted in green
    //TODO: addEventListener for wrong answer
    //TODO: change display color of incorrect buttons to red
//WHEN user clicks on "next question" button
//THEN the question card flips to the questions side
    //TODO: addEventListener for "next question" button
    //TODO: "#game-card-border" flips back to question side
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


