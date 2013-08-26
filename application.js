$(document).ready(function(){
	
//generates a number between 0 and 100
var answer = Math.floor( Math.random()*101);

var guess = $("#guess").val();
if $((guess-answer) <= Math.abs(5)){
	return "Good job!";
}
else {
	return "Not quite!";
}
	
//else if(isNaN(guess) === true || guess > 100 || guess < 0 || guess === '')
	//alert ("Please enter a number between 0 and 100.");
	
	
	
});
