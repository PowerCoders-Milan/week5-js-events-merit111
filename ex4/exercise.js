// Create an input field and whenever the user types a word, show what the user has typed by inserting it in the p tag.

// # Extra

// Create an object with tree images links (add your images to the exercise folder).

// When the user writes the name of the image show it under the input field.

// Ex. <br>
// var obj = {dog: [dog image], cat:[cat image], turtle:[turtle image]}
var main = document.getElementById("main")
var input = document.createElement("input");
input.setAttribute("type", "text")
input.setAttribute("id", "box");
document.body.appendChild(input)

function user() {
    main.innerHTML=input.value;
}














//   let node = document.createTextNode("Some new text");
//   let parent = document.querySelector("#demo");
//   span.appendChild(node);
//   parent.appendChild(span);