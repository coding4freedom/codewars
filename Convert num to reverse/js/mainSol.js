
/*
Given a random non-negative number, you have to return the digits 
   of this number within an array in reverse order.

348597 => [7,9,5,8,4,3]
0 => [0]  
*/


function revNum(n){

}

function reverseNum(n) {
    return String(n).split('').map(Number).reverse()
  }