// Assign variables to DOM
var scores = "highscores.html"
var questionsPage = "questions.html"
var home = "index.html"

// Assign Questions variable
var questions = [{
    question: "Inside which HTML element do we put JavaScript?",
    choices: ["<scripting>", "<javascript>", "<js>", "<script>"],
    correctAnswer: 3
}, {
    question: "Which event occurs when the user clicks on an HTML element?",
    choices: ["onchange", "onmouseclick", "onclick", "onmouseover"],
    correctAnswer: 2
}, {
    question: "Which operator is used to assign a value to a variable?",
    choices: ["*", "=", "+", "x"],
    correctAnswer: 1
}];

// Assign variables to function quiz
var currentQuestion = 0;
var correctAnswers = 0;
var quizOver = false;

// Build Timer to start
var timer = 60;
var min = 0;
var sec = 0;
function startTimer(){
	min=parseInt(timer/60);
	sec=parseInt(timer%60);

	if(timer<1){
		window.location="highscores.html";
	}

	document.getElementById("time").innerHTML = "Time Left: " + min + "m " + sec + "s";
	timer--;
	setTimeout(function(){
		startTimer();
	}, 1000);
}

// Display Questions
function displayCurrentQuestion() {
    var question = questions[currentQuestion].question;
    var questionClass = $(document).find(".quizContainer > .question");
    var choiceList = $(document).find(".quizContainer > .choiceList");
    var numChoices = questions[currentQuestion].choices.length;

    // Set the questionClass text to the current question
    $(questionClass).text(question);

    // Remove all current <li> elements (if any)
    $(choiceList).find("li").remove();

    var choice;
    for (i = 0; i < numChoices; i++) {
        choice = questions[currentQuestion].choices[i];
        $('<li><input type="radio" value=' + i + ' name="dynradio" />' + choice + '</li>').appendTo(choiceList);
    }
}


$(document).ready(function(){

	// Start Button function
	$("#start").on("click",function(){
		$(location).attr("href", questionsPage);
	});

	// Highscores Button function
	$("#viewscores").on("click",function(){
		$(location).attr("href", scores);
	});

	// Start Over
	$("#Home").on("click",function(){
		$(location).attr("href", home);
	});

	// Clear Scores
	$("#Clear").on("click",function(){
		$(".scores-list").empty();
	});

});



