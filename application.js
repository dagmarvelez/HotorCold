$(document).ready(function(){
	
//generates a number between 0 and 100
var answer = Math.floor( Math.random()*101);

var guess = $("#guess").val();

function(submitGuess){
	if (guess == answer){
		$("#win").addClass("visible-comment");
	}
	else if (Math.abs(guess-answer) <= 15){
		$("#warm").addClass("visible-comment");
	}
	else if (Math.abs(guess-answer) > 15){
		$("#cold").addClass("visible-comment");
	}
	else if(guess > 100 && guess < 0 && isNaN(guess)===true){
		$("#error").addClass("visible-comment");
	}
};

$("#guess-button").click(submitGuess);
if(enter.keyCode == 13){
	submitGuess();
	alert("Yes!");
}
//inputscope
	
//else if(isNaN(guess) === true || guess > 100 || guess < 0 || guess === '')
	//alert ("Please enter a number between 0 and 100.");
	
	
	
});
