// Create variables to DOM
var scores = "highscores.html"
var questions = "questions.html"
var home = "index.html"

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

// Build Questions variable

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



	// Add to Highscores
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



