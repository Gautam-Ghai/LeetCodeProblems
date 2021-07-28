/*
Given an integer x, return true if x is palindrome integer.

An integer is a palindrome when it reads the same backward as forward. For example, 121 is palindrome while 123 is not.
*/

/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function (x) {
  var reverseInt = reverse(x);

  if (x >= 0) {
    if (reverseInt == x) {
      return true;
    } else {
      return false;
    }
  } else {
    return false;
  }
};

function reverse(x) {
  var i = Math.abs(x).toString().split("").reverse().join("");
  i = parseInt(i);

  return i;
}
