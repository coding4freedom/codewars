/*
Complete the solution so that it reverses the string passed into it.

example:
'world'  =>  'dlrow'

*/

function sol(str){
  return str.split('').reverse().join('')
}

console.log(sol('world'))