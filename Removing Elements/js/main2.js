/*
Take an array and remove every second element from the array. 
Always keep the first element and start removing with the next element.

Example:

["Keep", "Remove", "Keep", "Remove", "Keep", ...] 
  --> ["Keep", "Keep", "Keep", ...]


*/

function removeOther(arr){
    let newArr = []
  for(let i =0; i < arr.length; i+=2){
    newArr.push(arr[i])
  }

  return newArr
}

console.log(removeOther(["Keep", "Remove", "Keep", "Remove", "Keep"]))