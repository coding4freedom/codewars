
/*
In DNA strings, symbols "A" and "T" are complements of each other, 
as "C" and "G". You function receives one side of the DNA 
(string, except for Haskell); you need to return the other 
complementary side. 
DNA strand is never empty or there is no DNA at all (again, except for Haskell).

"ATTGC" --> "TAACG"
"GTAT" --> "CATA"
*/

function dnaStrand(dna){

}

function DNAStrand(dna){
    let pairs = {'A':'T','T':'A','C':'G','G':'C'};
    return dna.split('').map(function(v){ return pairs[v] }).join('');
  }