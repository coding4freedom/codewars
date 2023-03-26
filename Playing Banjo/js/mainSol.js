
/*
Create a function which answers the question "Are you playing banjo?".
If your name starts with the letter "R" or lower case "r", you are playing banjo!

The function takes a name as its only argument, and returns one of the following strings:

name + " plays banjo" 
name + " does not play banjo"
Names given are always valid strings.


example codewars
function areYouPlayingBanjo(name) {
  return name + (name[0].toLowerCase() == 'r' ? ' plays' : ' does not play') + " banjo";
}
*/
function playBanjo(name){
    
}

function areYouPlayingBanjo(name) {  
  return name.toLowerCase().substring(0,1) === 'r' ? `${name} plays banjo` : `${name} does not play banjo`  ;
}