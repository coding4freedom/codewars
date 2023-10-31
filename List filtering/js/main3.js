
/*
In this kata you will create a function that takes 
a list of non-negative integers and strings and returns 
a new list with the strings filtered out.

[1,'a',2,'g',3,'z',4,5,'h',6]
*/

function listFilter(l) {
    return l.filter( int => Number.isInteger(int))
}

console.log(listFilter([1,'a',2,'g',3,'z',4,5,'h',6]))