
/*
Write a method that takes one argument as name and then 
greets that name, capitalized and ends with an exclamation point.

Example:

"riley" --> "Hello Riley!"
"JACK"  --> "Hello Jack!"

*/
function greet(name){
    
}

var greet = function(name) {  
  
  
    let newName = name.split('').map((n, index) => {
      return index === 0 ? n.toUpperCase(): n
    }).join('')
    
    let greeting = `Hello ${newName}!`
    
    return greeting;
};