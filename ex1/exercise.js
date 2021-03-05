// define your functions here
// # Bold on hover

// Write a JavaScript program to change the color of the bold words when the user hovers the link.

// ## EXTRA (to do when everything is finished)

// Make the color random for each bold word when the user hovers.

// call the functions and connect them to an event
// console.log(p)

var a = document.querySelector('a');
var strong = document.querySelectorAll('strong');

a.addEventListener('mouseover', function(){
    strong.forEach(function(item){
        item.style.color = "red";
    })
});


a.addEventListener('mouseleave', function(){
    strong.forEach(function(item){
        item.style.color = "black";
    })
});





// a.removeEventListener(" mouseleave", changeColor);

// function changeColor() {
//     Strong.forEach(function(){
//       item.style.color = "red";
//     });
    
// };



// function changeColor() {
//    for (var p = 0; p < el.length; p++) {
//        el[p].style.color = "blue";
//    }; 
   
// };

// p.addEventListener("mouseleave", changeColor)



// document.querySelector("p").addEventListener("click", p); 

