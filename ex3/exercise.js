// Create two buttons, when clicked they will increment or decrease the counter in the p tag.

// Once it reaches +10 or -10 show an image below the counter.

// You can either create an image element or hide/show an existing image.

// # Extra

// Position the "+1" button to the right and the "-1" to the left.

// The counter will start at the center of the screen and move towards the button that you clicked.

// Enjoy!

// ar increment = 10;
// var decrement = -10;
//  function button() {
//      increment()
 
var a = 1;
 function increase(){
    var textBox = document.getElementById("load");
    textBox.innerHTML= a
    a++;
    // textBox.value++;
    
}    
function decrease(){
  var textBox = document.getElementById("load");
    textBox.innerHTML= a
    a--;
    // textBox.value--;
}