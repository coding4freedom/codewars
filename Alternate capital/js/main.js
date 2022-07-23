/*
Given a string, capitalize the letters that occupy even 
indexes and odd indexes separately, and return as shown below. 
Index 0 will be considered even.

For example, capitalize("abcdef") = ['AbCdEf', 'aBcDeF']. 
See test cases for more examples.

The input will be a lowercase string with no spaces.

*/

function altCaps(s){
    let even = s.split('').map((s, index) => index % 2 === 0? s.toUpperCase(): s).join('')
    let odd =  s.split('').map((s, index) => index % 2 === 0? s: s.toUpperCase()).join('')
    
    return [even, odd];
}

console.log(altCaps("abcdef"))