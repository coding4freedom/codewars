
/*
Complete the function that accepts a string parameter, 
and reverses each word in the string. All spaces in 
the string should be retained.

Examples
"This is an example!" ==> "sihT si na !elpmaxe"
"double  spaces"      ==> "elbuod  secaps"
*/

function revWords(str){
    return str.split('').reverse().join('').split(' ').reverse().join(' ')
}

console.log(revWords('This is an example'))