function isPalindrome(word) {
  if (word.split('').reverse().join('') === word){
    return true;
  } else {
    return false;
  }

}

/*
if-then statement
  split string into array of substring
  reverse string, return array as a string
*/

/*
if-then statement, with empty string containing hypothetical word. Followed by empty string that
  reverses word, followed by empty string that joins both empty strings to equal the function argument
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
