/*
In this kata you will create a function that takes 
a list of non-negative integers and strings and returns 
a new list with the strings filtered out.

*/

function listFilter(l) {
    return l.filter(fact => Number.isInteger(fact))
}

console.log(listFilter(['a','k','k','i',1,5,0]))