function calculateArea(width,height) {
//function for calculating area of wallOne//
var area = (width*height)
//statement that variable area = width * height//
return area;
//call on area to return//
}
var long= prompt("length")
//creates var prompt to ask user for length// 
var short = prompt("width")
//creates var prompt to ask user for width// 
var wallOne = calculateArea(short,long);
//uses function calculateArea to find area for wallOne with the user generated dimensions//
window.alert(wallOne);
//popup of wallOne area//
