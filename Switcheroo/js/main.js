/*
Given a string made up of letters a, b, and/or c, 
switch the position of letters a and b (change a to b and vice versa). 
Leave any incidence of c untouched.

Example:

'acb' --> 'bca'
'aabacbaa' --> 'bbabcabb'
*/

function swap(x){
    return x.split('').map(a => a === 'c'? a = 'c' : a === 'a'? a = 'b' : a = 'a').join('')
}

console.log(swap('acb'))