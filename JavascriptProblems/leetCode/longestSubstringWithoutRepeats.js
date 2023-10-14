function longestSubstringWithoutRepeating(s) {
    let maxLength = 0; // Initialize the maximum length of the substring
    let start = 0; // Initialize the starting index of the current substring
    const charIndexMap = {}; // A map to store the most recent index of each character
  
    for (let end = 0; end < s.length; end++) {
      const currentChar = s[end];
  
      if (charIndexMap[currentChar] !== undefined) {
        // If the character is already in the map, move the starting index
        // of the substring to the next index of the repeating character.
        start = Math.max(start, charIndexMap[currentChar] + 1);
      }

      console.log(charIndexMap);
  
      // Update the index of the current character in the map.
      charIndexMap[currentChar] = end;
  
      // Calculate the current maximum substring length.
      maxLength = Math.max(maxLength, end - start + 1);
    }
  
    return maxLength;
  }
  
  // Example usage:
  const inputString = "abcabcbb";
  const result = longestSubstringWithoutRepeating(inputString);
  console.log("Longest substring without repeating characters:", result);
  