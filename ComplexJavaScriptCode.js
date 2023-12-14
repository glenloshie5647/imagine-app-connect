/* 
   Filename: ComplexJavaScriptCode.js
   Description: This code is a complex algorithm implementation that finds the longest palindromic substring in a given string.
*/

// Function to find the longest palindromic substring in a string
function longestPalindromicSubstring(str) {
   let maxLength = 0;
   let startingIndex = 0;

   // Helper function to expand the palindrome substring
   const expandAroundCenter = (left, right) => {
      while (left >= 0 && right < str.length && str[left] === str[right]) {
         left--;
         right++;
      }
      return right - left - 1;
   };

   for (let i = 0; i < str.length; i++) {
      let len1 = expandAroundCenter(i, i); // Case for odd-length palindromes
      let len2 = expandAroundCenter(i, i + 1); // Case for even-length palindromes
      let len = Math.max(len1, len2);
      
      if (len > maxLength) {
         maxLength = len;
         startingIndex = i - Math.floor((len - 1) / 2);
      }
   }

   return str.substring(startingIndex, startingIndex + maxLength);
}

// Test cases
console.log(longestPalindromicSubstring("babad")); // Output: "bab" or "aba"
console.log(longestPalindromicSubstring("cbbd")); // Output: "bb"