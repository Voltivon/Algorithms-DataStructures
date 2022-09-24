
// Complete the solution so that it splits the string into pairs of two characters. If the string contains an odd number of characters then it should replace the missing second character of the final pair with an underscore ('_').

// Examples:

// * 'abc' =>  ['ab', 'c_']
// * 'abcdef' => ['ab', 'cd', 'ef']

function solution(str){
    if(str.length == 0){
        return []
    }
    
    return(str.length % 2 ? str + "_" : str).match(/../g);
    
 }

 console.log(solution("abcdefg"));
