/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.

  Once you've implemented the logic, test your code by running
  - `npm run test-anagram`
*/

function isAnagram(str1, str2) {
  let len1 = str1.length;
  let len2 = str2.length;

  if(len1 !== len2){
    return false;
  }
  
  str1 = str1.toLowerCase().split('').sort().join('');
  str2 = str2.toLowerCase().split('').sort().join('');

  return str1 === str2;
}

// const ans = isAnagram("abc","cab");
// console.log(ans);   //true

module.exports = isAnagram;
