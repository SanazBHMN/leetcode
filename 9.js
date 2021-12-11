/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function (x) {
  var xString = String(x);
  var xArray = Array.from(xString);

  return xString === xArray.reverse().join("") ? true : false;
};
