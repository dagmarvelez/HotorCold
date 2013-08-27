$(document).ready(function(){
	
//generates a number between 0 and 100
var answer = Math.floor( Math.random()*101);

//submits answer when clicking the guess button
function submitGuess(){
	$("#guess-button").click(submit);
}
	
submitGuess();

function submit(){
	var guess = $("#guess").val();
	if (guess == answer){
		console.log("Congrats, you win!")
	}
	else if((guess-answer) <= Math.abs(5)){
		console.log("You're getting warmer!");
	}
	else if ((guess-answer) > Math.abs(5)){
		console.log("Not quite!");
	}
	else if ((guess-answer) > Math.abs(20)){
		console.log("You're getting colder!");
	}
	else if(isNaN(guess) === true || guess > 100 || guess < 0 || guess === ''){
		alert ("Please enter a number between 0 and 100.");
	}
}	
	
});
