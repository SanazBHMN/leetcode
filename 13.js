/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function (s) {
  var obj = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };
  var sum = 0;
  var values = [];

  for (var i = 0; i < s.length; i++) {
    if (obj[s[i]] >= obj[s[i + 1]] || i === s.length - 1) {
      values.push(obj[s[i]]);
    } else {
      values.push(obj[s[i + 1]] - obj[s[i]]);
      i++;
    }
    // console.log(values);
  }

  for (var j = 0; j < values.length; j++) {
    sum += values[j];
  }

  return sum;
};
