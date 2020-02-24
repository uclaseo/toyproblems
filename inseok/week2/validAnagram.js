var isAnagram = function(s, t) {
  if (s.length !== t.length) return false;
  const map = {};
  for (let i = 0; i < s.length; i += 1) {
    map[s[i]] ? map[s[i]] += 1 : map[s[i]] = 1;
  }
  
  for (let j = 0; j < t.length; j += 1) {
    if (!map[t[j]]) {
      return false;
    } else {
      map[t[j]] -= 1;
    }
  }
  return true;
};