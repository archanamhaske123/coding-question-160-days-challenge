//✅ What is a Palindrome?
// => A palindrome is a word, phrase, or sequence that reads the same backward as forward.
//Step 1: Create a function that accepts a string. //.replace(/[^a-z0-9]/g, '') if we want remove splace or special charater use this 
function isPalindrome(str){
//🔹 Step 2: Convert the string to lowercase (to ignore case).
str= str.toLowerCase();
console.log("lowercase",str);
//🔹 Step 4: Reverse the string.
 let reversed= str.split("").reverse().join("");
 console.log("reversed",reversed);
//🔹 Step 5: Compare the original with the reversed version.
//🔹 Step 6: Return true if they match, otherwise false.
return str === reversed;
}
console.log(isPalindrome("MOM"));
// Example usage
console.log(isPalindrome("madam"));    // true
console.log(isPalindrome("hello"));    // false
console.log(isPalindrome("RaceCar"));  // true
//"madam" → ✅ Palindrome
//"mom" → ✅ Palindrome
//"hello" → ❌ Not a palindrom
//"racecar" → ✅ Palindrome
