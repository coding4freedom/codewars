
/*

Return the number (count) of vowels in the given string.

We will consider a, e, i, o, u as vowels for this Kata (but not y).

The input string will only consist of lower case letters and/or spaces.


'a', 'e', 'i', 'o', 'u'
*/

function getCoun(str){

}

function getCount(str) {
    var vowelsCount = 0;
    
    let vowels = ['a', 'e', 'i', 'o', 'u']
    // let num = 0;
    // enter your magic here
    Array.from(str).forEach(element => {
      
      /*if(element.includes(vowels[num])){
        vowelsCount++
      }
      num++*/
      vowels.forEach(v => {
        v === element ? vowelsCount++ : false 
      })
      
    }) 
    
    return vowelsCount;
  }