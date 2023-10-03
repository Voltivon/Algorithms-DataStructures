function findSequences(n){
    let result = [];

    for(let start = 0; start < n; start++ ){
        let sequence = [start];
        let sum = start;
        console.log("sequence: ",sequence);
        console.log("Sum: ", sum);
        for(let i = start; i < sum; i++){
            
            sum += i;
            sequence.push(i)
        }

        if(sum === n){
            result.push(sequence.slice());
            break;
        }
    }

    return result
}



console.log(findSequences(15));