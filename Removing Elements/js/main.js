
/*
Take an array and remove every second element from the array. 
Always keep the first element and start removing with the next element.

Example:

["Keep", "Remove", "Keep", "Remove", "Keep", ...] 
  --> ["Keep", "Keep", "Keep", ...]


*/

let samp = ["Keep", "Remove", "Keep", "Remove", "Keep"]
function removeOther(arr){
  return  arr.filter((val, index) => index % 2 == 0)
}

console.log(removeOther(samp))