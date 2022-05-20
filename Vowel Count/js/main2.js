/*

Return the number (count) of vowels in the given string.

We will consider a, e, i, o, u as vowels for this Kata (but not y).

The input string will only consist of lower case letters and/or spaces.

*/
let someStr = 'we the people happen to enjoy anime';

function countVowels(str) {
    let vowels = ['a', 'e', 'i', 'o', 'u'];
    let count = 0;

    Array.from(str).forEach(s => {
        vowels.includes(s) ? count++: false          
        
        return count;
    })
    return console.log(count)
}

countVowels(someStr);