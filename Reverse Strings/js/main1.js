/*
Complete the solution so that it reverses the string passed into it.

example:
'world'  =>  'dlrow'

*/

function solution(str){
    str = str.split('').reverse().join('');
    return str;
}