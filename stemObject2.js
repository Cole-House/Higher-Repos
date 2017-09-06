var x = prompt("enter subject, room, or students ");
var stem = {
 subject :"Info Tech",
 room :"F103", 
 students :18, 
}
var output = x.toLowerCase();
if ((output === "subject") || (output === "room") || (output === "students")) {
window.alert(stem[output]);
}

else {
for (i=1; i<4; i++) {
//uses for loop to stop function after 4 false times//
var x = prompt("enter subject, room, or students. You have tried" + "" + i + "times")
var output = x.toLowerCase();
if ((output === "subject") || (output === "room") || (output === "students")) {window.alert(stem[output]);}
}
}
