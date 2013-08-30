$(document).ready(function(){

var answer = generateNewAnswer();

$("#guess-button").on("click", function(){
		submitGuess();	
});

$("#newgame-button").on("click", function(){
	history.go(0);
});

$("#guess").keypress(function(e){
	if(e.which == 13){
		submitGuess();
	}
});

$("#newgame").on("click", function(){
	generateNewAnswer();
});

function generateNewAnswer(){
	return Math.floor(Math.random()*101);
};

function submitGuess(){
	var guess = +$("#guess").val();
	
	$(".visible-comment").removeClass("visible-comment");
	$(".guess-box").removeClass("green-background");
	$(".guess-box").removeClass("red-background");
	$(".guess-box").removeClass("orange-background");
	$(".guess-box").removeClass("blue-background");


	if (guess === answer){
		$("#win").addClass("visible-comment");
		$(".guess-box").addClass("green-background");
		$("#page-background").addClass("visible-comment");
	}
	else if(guess > 100 || guess < 0 || isNaN(guess)===true || guess === ""){
		alert("Please enter a number between 1 and 100")
	}
	else if (Math.abs(guess-answer) <= 5){
		$("#hot").addClass("visible-comment");
		$(".guess-box").addClass("red-background");

	}
	else if (Math.abs(guess-answer) <= 25){
		$("#warm").addClass("visible-comment");
		$(".guess-box").addClass("orange-background");
	}
	else if (Math.abs(guess-answer) > 25){
		$("#cold").addClass("visible-comment");
		$(".guess-box").addClass("blue-background");
	}

};
});
	


