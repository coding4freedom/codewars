/*
Take an array and remove every second element from the array. 
Always keep the first element and start removing with the next element.

Example:

["Keep", "Remove", "Keep", "Remove", "Keep", ...] 
  --> ["Keep", "Keep", "Keep", ...]


*/
let phrase = ["Keep", "Remove", "Keep", "Remove", "Keep"]

function everyOtherElement(arr){
  let newArr = []
  for(let i = 0; i < arr.length; i+=2){
    newArr.push(arr[i])
  }
  arr = newArr;
  return arr;
}

console.log(everyOtherElement(phrase))

