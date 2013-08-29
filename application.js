$(document).ready(function(){

var answer = generateNewAnswer();
	
$("#guess-button").on("click", function(){
//if(enter.keyCode == 13){
	submitGuess();	
)};

function generateNewAnswer(){
	return Math.floor(Math.random()*101);
};

function(submitGuess){
	
	var guess = $("#guess").val();
	
	if (guess == answer)
		$("#win").addClass("visible-comment");
	
	else if (Math.abs(guess-answer) <= 15)
		$("#warm").addClass("visible-comment");
		
	else if (Math.abs(guess-answer) > 15)
		$("#cold").addClass("visible-comment");
	
	else if(guess > 100 && guess < 0 && isNaN(guess)===true)
		$("#error").addClass("visible-comment");
	

};
	
});

};
