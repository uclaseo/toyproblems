/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function(n) {
  const repeat = {};
  while (n !== 1) {
      if (repeat[n]) {
          return false;
      } else {
          repeat[n] = true;
      }
      const stringArray = String(n).split('');
      n = stringArray.reduce((acc, val) => {
          acc += Number(val) * Number(val);
          return acc;
      }, 0);
  }
  return true;
};