let s = 'all we do is count5 all d6ay 21come here!'



function cleanStr(c){
    let nums = '0123456789';
    let result = ''

    for(let i = 0; i < c.length; i++){
        if(!nums.includes(s.charAt(i))){
            result += s[i]
        }
    }
    return console.log(result);
}

cleanStr(s);