/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
  if (s.length !== t.length) return false;
  if (s.length === 0 && t.length === 0) return true;
  // brute
  const map = {};
  for (let i = 0; i < s.length; i += 1) {
      map[s[i]] ? map[s[i]] += 1 : map[s[i]] = 1;
  }
  for (let j = 0; j < t.length; j += 1) {
      if (map[t[j]] === undefined) {
          return false;
      }
      map[t[j]] -= 1;
      if (map[t[j]] < 0) {
          return false;
      }
  }
  return true;
};