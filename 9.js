/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function (x) {
  var xString = String(x);
  var xReverted = xString.split("").reverse().join();

  return xString === xReverted ? true : false;
};
