function palindrome(message){
  var center = Math.floor(message.length / 2);
  var isEven = message.length % 2;
  var firstHalf = message.substring(0, center + isEven);
  var secondHalf = message.substring(center);
  console.log(firstHalf);
  console.log(secondHalf);
  return firstHalf === reverseString(secondHalf);
}
function reverseString(message){
  return message.split("").reverse().join("");
}
palindrome('hello'); // should return false
palindrome('abcba'); // should return true
