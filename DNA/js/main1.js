/*
In DNA strings, symbols "A" and "T" are complements of each other, 
as "C" and "G". You function receives one side of the DNA 
(string, except for Haskell); you need to return the other 
complementary side. 
DNA strand is never empty or there is no DNA at all (again, 
    except for Haskell).

"ATTGC" --> "TAACG"
"GTAT" --> "CATA"
*/

function dnaStrand(dna){
    let strands = {'A': 'T', 'T': 'A', 'G': 'C', 'C': 'G'}
    return dna.split('').map(strand => strands[strand]).join('')
}

console.log(dnaStrand("CATA"))