function validParentheses(parenStr) {
    const stack = [];
   
    for (let i = 0; i < parenStr.length; i++) {
        console.log(stack);
      if (parenStr[i] === "(") {
        stack.push("(");
      } else if (parenStr[i] === ")") {
        if (stack.length === 0 || stack.pop() !== "(") {
          return false; // Unbalanced or incorrect ordering
        }
      }
      
    }
    return stack.length === 0; // Check if any unclosed parentheses are left
  }
  


console.log(validParentheses("()())"));