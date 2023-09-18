
/*

Return the number (count) of vowels in the given string.

We will consider a, e, i, o, u as vowels for this Kata (but not y).

The input string will only consist of lower case letters and/or spaces.


['a', 'e', 'i', 'o', 'u']
*/

function getCoun(str){
    let count = 0;
    let vow = ['a', 'e', 'i', 'o', 'u'];
    Array.from(str).map((x) => vow.includes(x) ?  count++ : false)

    return count;
    
}

console.log(getCoun('mapple'))