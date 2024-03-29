/*
Check to see if a string has the same amount of 'x's and 'o's. 
The method must return a boolean and be case insensitive. 
The string can contain any char.

Examples input/output:

XO("ooxx") => true
XO("xooxx") => false
XO("ooxXm") => true
XO("zpzpzpp") => true // when no 'x' and 'o' is present should return true
XO("zzoo") => false
*/
function xNo(str){    
    let x = str.split('').reduce((acc, curr) => curr.includes('x') ? acc= acc + 1 : acc, 0)
    let o = str.split('').reduce((acc, curr) => curr.includes('o') ? acc = acc + 1 : acc, 0)
    
    return x == o ? true : false
}

console.log(xNo("zpzpzpp"))
