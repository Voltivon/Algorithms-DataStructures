function truncateString(str, num) {
  
  if(str.length <= num){
    return str
  }
let newStr = str.slice(str[0], num)
 return newStr += "..."
}


console.log(truncateString("A-tisket a-tasket A green and yellow basket", "A-tisket a-tasket A green and yellow basket".length + 2 ))
