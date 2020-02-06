/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isIsomorphic = function(s, t) {
  const sMap = {} , tMap = {};
  for(let i = 0 ; i < s.length ; i++){
      if(sMap[s[i]] === undefined) sMap[s[i]] = t[i];
      if(tMap[t[i]] === undefined) tMap[t[i]] = s[i];
      if(sMap[s[i]] !== t[i] || tMap[t[i]] !== s[i]) return false;
  }
  
  return true;
};