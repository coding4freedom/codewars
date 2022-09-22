
/*
Given a string made up of letters a, b, and/or c, 
switch the position of letters a and b (change a to b and vice versa). 
Leave any incidence of c untouched.

Example:

'acb' --> 'bca'
'aabacbaa' --> 'bbabcabb'
*/

function swap(x){

}

function switcheroo(x){
    return x.split('').map(ch => {
      if(ch === 'a'){
        return ch = 'b'
      }else if(ch === 'b'){
        return ch = 'a'
      }else if(ch === 'c'){
        return ch = 'c' 
      }     
    }).join('')
}