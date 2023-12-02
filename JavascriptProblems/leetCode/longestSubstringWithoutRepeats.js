// function longestSubstringWithoutRepeating(s) {
//     let maxLength = 0; // Initialize the maximum length of the substring
//     let start = 0; // Initialize the starting index of the current substring
//     const charIndexMap = {}; // A map to store the most recent index of each character

//     for (let end = 0; end < s.length; end++) {
//       const currentChar = s[end];

//       if (charIndexMap[currentChar] !== undefined) {
//         // If the character is already in the map, move the starting index
//         // of the substring to the next index of the repeating character.
//         start = Math.max(start, charIndexMap[currentChar] + 1);
//       }

//       console.log(charIndexMap);

//       // Update the index of the current character in the map.
//       charIndexMap[currentChar] = end;

//       // Calculate the current maximum substring length.
//       maxLength = Math.max(maxLength, end - start + 1);
//     }

//     return maxLength;
//   }

//   // Example usage:
//   const inputString = "abcabcbb";
//   const result = longestSubstringWithoutRepeating(inputString);
//   console.log("Longest substring without repeating characters:", result);

// Solution 2 12/1/2023

const longestSubStringNoRepeats = function (s) {
  let maxLen = 0;
  let start = -1;
  let dict = Array(256).fill(-1);

  for (let i = 0; i < s.length; i++) {
    if (dict[s.charCodeAt(i)] > start) {
      start = s.charCodeAt(i);
    }
    dict[s.charCodeAt(i)] = i;
    maxLen = Math.max(maxLen, i - start);
  }

  return maxLen;
};
