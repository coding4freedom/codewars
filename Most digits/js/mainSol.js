/*
Find the number with the most digits.

If two numbers in the argument array have the same number
 of digits, return the first one in the array.

 [5214, 2, 4458, 238, 874]
*/

function findLong(array){

}

function findLongest(array){
    return array.reduce((gather, first) => `${first}`.length > `${gather}`.length ? first: gather)
}
console.log(findLongest([5214, 2, 4458, 238, 874]))