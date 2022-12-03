
/*

Write a function that returns a string in which firstname is swapped with last name.

nameShuffler('john McClane'); => "McClane john"

*/

function swapC(str){
  
}


function swap(str){
    let wordSwap = str.split(' ');
    let last = wordSwap[1];
    let first = wordSwap[0];
    let result = `${last} ${first}`
    
    console.log(typeof result)
    return result;
  }
  
  console.log(swap('Tony Robinson'))

  /* Cleaner way to do this  */

  function nameSuffle(str){
    return str.split(' ').reverse().join(' ')
  }