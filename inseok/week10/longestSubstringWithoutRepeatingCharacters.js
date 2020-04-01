/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
  const map = {};
  let max = 0;
  let left = 0;
  let right = 0;
  while (right < s.length) {
      left = map[s[right]] >= left ? map[s[right]] + 1 : left;
      map[s[right]] = right;
      max = Math.max(max, right - left + 1);
      right += 1;
  }
  return max;
};