// Assign variables to DOM
var scores = "highscores.html"
var questionsPage = "questions.html"
var home = "index.html"


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
	// Assign variables to function quiz
	var currentQuestion = 0;
	var correctAnswers = 0;
	var quizOver = false;
	var highScores = $(".scores-list");

	// Assign Questions variable
	var questions = [{
		question: "A very useful tool used during development and debugging for printing content to the debugger is:",
		choices: ["JavaScript", "terminal/bash", "for loops", "console log"],
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

$(document).ready(function(){
		// Display the first question
		displayCurrentQuestion();
		$(this).find(".quizMessage").hide();
		$(document).find("#quizContainer > #frm1").hide();
		
	  // display the next question
	  $(".nextButton").click(function () {
		if (!quizOver) {

			var value = $("input[type='radio']:checked").val();
  
			if (value == undefined) {
				console.log("undefined")
			} else {
				$(document).find(".quizMessage").hide();
  
				if (value == questions[currentQuestion].correctAnswer) {
					correctAnswers++;
					console.log("right");
					$(".quizMessage").text("Right!").show();
				} else {
					console.log("wrong");
					$(".quizMessage").text("Wrong!").show();
				}
  
				currentQuestion++; // Since we have already displayed the first question on DOM ready
				console.log(value);

				if (currentQuestion < questions.length) {
					displayCurrentQuestion();
				} else {
					quizOver = true;
					displayScore();
					$(".nextButton").text("Submit Score?");
					$("#quizContainer > #frm1").show();
					$(".nextButton").click(function(){
						var name = $(this).find("#frm1").val();
						localStorage.setItem("name", name)
						window.location = scores;
						addName();
					});
				}
			}
		}
	});
	
});

	// Display Questions function //
	function displayCurrentQuestion(){
		var question = questions[currentQuestion].question;
		var numChoices = questions[currentQuestion].choices.length;
		var choiceList = $(document).find("#quizContainer > .choiceList");
		var questionClass = $(document).find("#quizContainer > .question");

		$(questionClass).text(question);

		$(choiceList).find("li").remove();

		var choice;
		for (i = 0; i < numChoices; i++) {
			choice = questions[currentQuestion].choices[i];
			$('<li class="liList"><input type="radio" value=' + i + '>' + " " + choice + '</li>').appendTo(choiceList);
		}
	};
	
	function resetQuiz() {
		currentQuestion = 0;
		correctAnswers = 0;
		hideScore();
	  }
	  function displayScore() {
		var result = $(".result")
		result.text("You scored: " + correctAnswers + " out of " + questions.length);
		result.show();
	  }
	  function addName(){
		$(highScores).prepend('div class="highscores">' + localStorage.getItem("name") + '</div>');
	  }
	  function hideForm() {
		$(document).find("#frm1").hide();
	  }

	  function hideScore() {
		$(document).find(".result").hide();
	  }

	// Start Button function //
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

