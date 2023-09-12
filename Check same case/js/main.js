/*

Write a function that will check if two given characters are the same case.

If either of the characters is not a letter, return -1
If both characters are the same case, return 1
If both characters are letters, but not the same case, return 0
Examples
'a' and 'g' returns 1

'A' and 'C' returns 1

'b' and 'G' returns 0

'B' and 'g' returns 0

'0' and '?' returns -1

*/

function sameCas(a,b){
    if (a.match(a | /[^a-zA-Z]/)  || b.match(a | /[^a-zA-Z]/)){
        return -1
    }
    else if (a == a.toUpperCase() && b == b.toUpperCase() || a == a.toLowerCase() && b == b.toLowerCase()){
        return 1
    } else if (a == a.toLowerCase() && b == b.toUpperCase() || a == a.toUpperCase() && b == b.toLowerCase()) {
        return 0
    } 
}

console.log(sameCas('0','?'))
