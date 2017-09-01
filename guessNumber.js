var guy = prompt("Guess a number from 1-10");
//ask player one for a  number between 1-10//
if ((guy < 1) || (guy >10) || isNaN(guy)) {
	window.alert("game machine broke");
 //condition that says "if" you input a number out side the range, or its not a # the game will break//
}
else {
var girl = [Math.floor(Math.random()*10 + 1)]
//else condition when you get past 1st stage you have the computer come up with a second number from 1-10//
if (guy == girl) {
window.alert("you win ;)")
//if both playersinputted the same number then you display "you win"//
}
else {
window.alert("Player one's answer was:" + guy);
window.alert("Player two's answer was:" + girl);
//if they dont answer the same number, then you just tell the individual answers//
}
 }
