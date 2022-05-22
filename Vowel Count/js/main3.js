/*

Return the number (count) of vowels in the given string.

We will consider a, e, i, o, u as vowels for this Kata (but not y).

The input string will only consist of lower case letters and/or spaces.

*/

function getCount(str) {
    let count = 0
    let vowels = ['a', 'e', 'i', 'o', 'u']

    str = str.split('').map(s => {
        if(vowels.includes(s)){
            count++
        }
        return count;
    })


    return console.log(count)
}

getCount('allcandy')