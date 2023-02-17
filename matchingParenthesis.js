String.prototype.findParenMatch = function(pos) {
  const stack = [];
    
  for(let i = 0, j; i < this.length; i++){  // Loop over string
    if(this[i] == "("){  //checks for "("
        stack.push(i);  // pushes to stack
    } else if(this[i] == ")" && stack.length){  // checks for ")"
        console.log(stack);
        console.log( j = stack.pop());
        if(pos == i) return j;
        
        if(pos == j) return i;
    }
  }

  return -1;
  
  
};
