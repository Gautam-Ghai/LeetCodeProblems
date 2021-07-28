/*
Given a signed 32-bit integer x, return x with its digits reversed. If reversing x causes the value to go outside the signed 32-bit integer range [-231, 231 - 1], then return 0.

Assume the environment does not allow you to store 64-bit integers (signed or unsigned).
*/

/**
 * @param {number} x
 * @return {number}
 */
var reverse = function (x) {
  var i = Math.abs(x).toString().split("").reverse().join("");
  i = parseInt(i);

  if (i > 0x7fffffff) {
    return 0;
  } else {
    return x < 0 ? -i : i;
  }
};
