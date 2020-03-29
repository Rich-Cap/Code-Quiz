// Create variables to DOM
var scores = "highscores.html"
var questions = "questions.html"
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

// Build Timer to start

var timer = 600;
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



// var questions = {
// 	question: "What is 2 + 2?",
// 	answers: [
// 		{text: "4", correct: true},
// 		{text: "22", correct: false},
// 	]
// }

$(document).ready(function(){
	// Start Button function
	$("#start").on("click",function(){
		$(location).attr("href", questions);
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



