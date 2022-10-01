// Return the length of the longest word in the provided sentence.

// Your response should be a number.

function findLongestWordLength(str) {
  let newStr = str.split(" ");
  let result = 0;
  for (let i = 0; i < newStr.length; i++) {
    console.log(newStr[i].length);
    if (result < newStr[i].length) {
      result = newStr[i].length;
    }
  }
  console.log(result);
  return result;
}

findLongestWordLength("The quick brown fox jumped over the lazy dog");
