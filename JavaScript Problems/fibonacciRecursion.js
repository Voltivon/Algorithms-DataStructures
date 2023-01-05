function fibs(num){
    let sequence = [0, 1];

    for(let i = 2; i < num; i++){
        sequence[i] = sequence[i - 2] + sequence[i - 1]
    }

    return sequence;
   
}




console.log(fibs(10));


// Recursive solution

function recFibs(num){
    
    if(num < 3){
        return 1
    }
     return recFibs(num - 1) + recFibs(num - 2);
    
}

console.log(recFibs(5));
