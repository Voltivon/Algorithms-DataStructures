function titleCase(str) {
  let splitStr = str.split(" ")
  let newStr = []
  for(let i = 0; i < splitStr.length; i++){
      newStr[i] = splitStr[i][0].toUpperCase().concat(splitStr[i].slice(1).toLowerCase()) 

  }
  return newStr.join(" ")
 
}


console.log(titleCase("HERE IS MY HANDLE HERE IS MY SPOUT"));
