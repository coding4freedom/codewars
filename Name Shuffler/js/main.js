
/*

Write a function that returns a string in which firstname is swapped with last name.

nameShuffler('john McClane'); => "McClane john"

*/

function swapC(str){
    return str.split(' ').reverse().join(" ")
}

console.log(swapC('john McClane'))