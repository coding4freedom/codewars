
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

function betterThan(classPoints, yourPoints){

    let sum = 0;

    classPoints.push(yourPoints)
    let total = classPoints.reduce((acc, cur) => acc + cur, 0)

    sum = total;
    sum = sum / classPoints.length
    console.log(sum)
    return yourPoints > sum ? true : false
}

console.log(betterThan([85,72,91,80,88], 92))