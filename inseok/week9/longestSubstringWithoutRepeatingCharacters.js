var lengthOfLongestSubstring = function(s) {
  let p1 = 0;
  let p2 = 0;
  let map = {};
  let max = 0;
  while (p2 < s.length) {
      if (!map[s[p2]]) {
          map[s[p2]] = true;
          max = Math.max(max, p2 - p1 + 1);
          p2 += 1;
      } else {
          map[s[p1]] = false;
          p1 += 1;
      }
  }
  return max;
};

var lengthOfLongestSubstring = function(s) {
  let p1 = 0;
  let p2 = 0;
  let map = {};
  let max = 0;
  while (p2 < s.length) {
      if (map[s[p2]] >= 0) {
          p1 = Math.max(map[s[p2]] + 1, p1)
      }
      max = Math.max(max, p2 - p1 + 1);
      map[s[p2]] = p2;
      p2 += 1;
  }
  return max;
};