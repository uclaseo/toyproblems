var lengthOfLongestSubstringTwoDistinct = function(s) {
  // brute force
  let t = '';
  for (let i = 0; i < s.length; i += 1) {
      let x = s[i];
      const map = {};
      map[s[i]] = true;
      for (let j = i + 1; j < s.length; j += 1) {
          if (Object.keys(map).length === 1) {
              if (!map[s[j]]) {
                  map[s[j]] = true;
              }
          }
          if (!map[s[j]]) break;
          x += s[j];
      }
      if (x.length >= t.length) {
          t = x;
      }
  }
  return t.length;
};

var lengthOfLongestSubstringTwoDistinct = function(s) {
  const n = s.length;
  if (n < 3) return n;
  let left = 0;
  let right = 0;
  const map = {};
  let max = 2;
  while (right < n) {
      if (Object.keys(map).length < 3) {
          map[s[right]] = right;
          right += 1;
      }
      if (Object.keys(map).length === 3) {
          const index = Math.min(...Object.values(map));
          delete map[s[index]];
          left = index + 1;
      }
      max = Math.max(max, right - left);
  }
  return max;
};