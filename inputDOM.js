<button onclick="addAnother()">
Click to see magic
</button>
<ul>
</ul>
<input type="text" id="newText">

function addAnother(){
//creates a new element and stores it in a variable(newListItem)//

var newListItem = document.createElement('li');
var answer = document.getElementById('newText').value;
// creates a new text node and stores it in the variable(newText)//
var newText = document.createTextNode(answer);
//attach the new text node to the new element, so the text appended the text into the list item//
newListItem.appendChild(newText);
//find the new position where the new element should be added, index position 0 in the unordered list//
var position = document.getElementsByTagName('ul')[0];
//inserts the new element into its new position//
position.appendChild(newListItem);
}
