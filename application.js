$(document).ready(function(){
	

function(submitGuess){
	
	var answer = Math.floor(Math.random()*101);
	
	var guess = $("#guess").val();
	
	if (guess == answer)
		$("#win").addClass("visible-comment");
	else if (Math.abs(guess-answer) <= 15)
		$("#warm").addClass("visible-comment");
	else if (Math.abs(guess-answer) > 15)
		$("#cold").addClass("visible-comment");
	else if(guess > 100 && guess < 0 && isNaN(guess)===true){
		$("#error").addClass("visible-comment");
};

$("#guess-button").click(submitGuess);
if(enter.keyCode == 13){
	submitGuess();
}
	
	
	
});
