/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function(s) {
  const map = {};
  for (let i = 0; i < s.length; i += 1) {
      map[s[i]] = map[s[i]] ? map[s[i]] + 1 : 1;
  }
  for (let j = 0; j < s.length; j += 1) {
      if (map[s[j]] === 1) {
          return j;
      }
  }
  return -1;
};

