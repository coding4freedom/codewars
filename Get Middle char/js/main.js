

function reverseDig(num){
    //let newNum = [...String(num)] // ["3","5","2","3","1"]
    
    return String(num).split('').reverse().map(n => parseInt(n))
}

console.log(reverseDig(35231))