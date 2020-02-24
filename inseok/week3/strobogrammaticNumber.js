/**
 * @param {string} num
 * @return {boolean}
 */
var isStrobogrammatic = function(num) {
  const numberMap = {
      0: '0',
      1: '1',
      6: '9',
      8: '8',
      9: '6'
  }
  for (let i = 0; i < Math.ceil(num.length / 2); i += 1) {
      const number = num[i];
      const mirroredNumber = num[num.length - i - 1];
      if (numberMap[number] !== mirroredNumber) {
          return false;
      }
  }
  return true;
};

var isStrobogrammatic = function(num) {
  const numberMap = {
      0: '0',
      1: '1',
      6: '9',
      8: '8',
      9: '6'
  }
  for (let i = 0, j = num.length - 1; i <= j; i += 1, j -= 1) {
      const number = num[i];
      const mirrored = num[j];
      if (numberMap[number] !== mirrored) {
          return false;
      }
  }
  return true;
};