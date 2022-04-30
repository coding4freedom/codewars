
/* Let's play! You have to return which player won! In case of a 
draw return Draw! */

/*
rps('scissors','paper') // Player 1 won!
rps('scissors','rock') // Player 2 won!
rps('paper','paper') // Draw!
*/


const rps = (p1, p2) => {

    if((p1 === 'scissors' && p2 === 'paper') 
        || (p1 === 'paper' && p2 === 'rock')
        || (p1 === 'rock' && p2 === 'scissors') 
    ){
        console.log('Player 1 wins!')
    }else if (
        (p2 === 'scissors' && p1 === 'paper') 
        || (p2 === 'paper' && p1 === 'rock')
        || (p2 === 'rock' && p1 === 'scissors')
    ){
        console.log('Player 2 wins!')
    }else {
        console.log('Draw!')
    }

}    