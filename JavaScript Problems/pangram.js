function isPangram(string){
    const alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
    let newStr = string.toLowerCase();
    
    return alphabet.every(x => newStr.includes(x));
    
    }
    
    console.log(isPangram("The quick brown fox jumps over the laiy dog"));
    