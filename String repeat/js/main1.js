/*
Write a function called repeatStr which repeats the 
given string string exactly n times.

repeatStr(6, "I") // "IIIIII"
repeatStr(5, "Hello") // "HelloHelloHelloHelloHello"
*/

function repeatS (n, s) {
    let newS = '';
    for(let i = 1; i <= n; i++){
        newS += s;
    }
    return newS; 
}
console.log(repeatS(6, 'Super'))