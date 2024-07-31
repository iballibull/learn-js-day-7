/*
Title: Unique Characters

Description:
Write a function named hasUniqueCharacters that takes a string as input and returns true if the string contains all unique characters, and false otherwise. You can assume that the string contains only lowercase alphabets (a-z).

Example:
console.log(hasUniqueCharacters("abcdefg")); // Output: true
console.log(hasUniqueCharacters("hello")); // Output: false
*/

function hasUniqueCharacters(str) {
  for (let i = 0; i < str.length; i++) {
    let regex = new RegExp(str[i], 'gi');
    if (str.match(regex).length > 1) {
      return false;
    }
  }

  return true;
}

console.log(hasUniqueCharacters('abcdefg')); // Output: true
console.log(hasUniqueCharacters('hello')); // Output: false
