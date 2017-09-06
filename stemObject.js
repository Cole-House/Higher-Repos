var x = prompt("enter subject, room, or students ");
//asks user for one of the three keys in stem object//
var stem = {
 subject :"Info Tech",
 room :"F103", 
 students :18, 
}
// creates stem object for class with keys//
var output = x.toLowerCase();
//makes sure user input is lowercase//
if ((output === "subject") || (output === "room") || (output === "students")) {
window.alert(stem[output]);
}
//if statement that syas if the output === one of the keys in the object, display the keys value//
else {
askagain();
}
//if output doesnt equal any of the valid keys then we run the askagain function//
function askagain() {
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
//we run the whole thing again with the askagain function until the user gives a valid answer//
else {
askagain();
}
}
