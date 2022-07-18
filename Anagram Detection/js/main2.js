/*
An anagram is the result of rearranging the letters 
of a word to produce a new word (see wikipedia).

Note: anagrams are case insensitive

Complete the function to return true if the two arguments 
given are anagrams of each other; return false otherwise.

Examples
"foefet" is an anagram of "toffee"

"Buckethead" is an anagram of "DeathCubeK"

*/

function isAnagram(test, first){
    let t = test.toLowerCase()
    let f = first.toLowerCase()
    return t.split('').sort().join('') === f.split('').sort().join('') ? true : false
}

console.log(isAnagram("Bucketheas", "DeathCubeK"))