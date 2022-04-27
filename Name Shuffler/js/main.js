
/*

Write a function that returns a string in which firstname is swapped with last name.

nameShuffler('john McClane'); => "McClane john"

*/
let testStr = 'john McClane'

function nameShift(str){

    let arr = [];
    arr = str.split(' ').reverse()
    str = `${arr[0]} ${arr[1]}`
    return str;

}