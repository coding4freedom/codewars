
/*
Write a function that takes a single string (word) 
as argument. The function must return an ordered list 
containing the indexes of all capital letters in the string.

Example
Test.assertSimilar( capitals('CodEWaRs'), [0,3,4,6] );
*/

function caps (word){

}


let capitals = function (word) {
    // Write your code here
    var arr = []
    for(i = 0; i < word.length; i++){
      if (word[i] === word[i].toUpperCase()){
        arr.push(i)
      }
      
    }
    return arr
};

console.log(capitals('CodEWaRs'))