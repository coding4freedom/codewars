
/*

There was a test in your class and you passed it. Congratulations!
But you're an ambitious person. You want to know if you're better than 
the average student in your class.

You receive an array with your peers' test scores. 
Now calculate the average and compare your score!

Return True if you're better, else False!

Note:
Your points are not included in the array of your class's points. 
For calculating the average point you may add your point to the given array!

*/

[77,85,59,90,85,63] , 86
function betterThan(classPoints, yourPoints){

    let classN = classPoints.reduce((prev, curr) => curr + prev , 0) / classPoints.length
    return yourPoints > classN ? "Your better" : "False"
}

console.log(betterThan([77,85,59,90,85,63],79))