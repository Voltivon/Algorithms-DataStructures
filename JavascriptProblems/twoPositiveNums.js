function twoArePositive(a, b, c) {
    let positiveCount = 0;
  
    if(a > 0) positiveCount++;
    if(b > 0) positiveCount++;
    if(c > 0) positiveCount++;
  
    
    return positiveCount === 2;
  
}