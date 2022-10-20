
/*
Oh, no! The number has been mixed up with the text. Your goal is to retrieve the number from the text, can you return the number back to its original state?

Task
Your task is to return a number from a string.


aa1bb2cc3dd
*/

function number(value) {

}

function filterNum(value) {
    return +value.split('').filter(num => !isNaN(num)).join('')
}