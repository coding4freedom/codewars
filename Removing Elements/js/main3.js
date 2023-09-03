/*
Take an array and remove every second element from the array. 
Always keep the first element and start removing with the next element.

Example:

["Keep", "Remove", "Keep", "Remove", "Keep", ...] 
  --> ["Keep", "Keep", "Keep", ...]


*/

function removeOther(arr){
  return arr.filter((a, index) => index%2 - 1)
}

console.log(removeOther(["Keep", "Remove", "Keep", "Remove", "Keep"]))