/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    if (s.length !== t.length) return false;
    let sMap = {};
    for (let i = 0; i < s.length; i++) {
        if (sMap[s[i]]) sMap[s[i]]++;
        else sMap[s[i]] = 1;
    }
    for (let i = 0; i < t.length; i++) {
        if (sMap[t[i]] && sMap[t[i]] > 0) sMap[t[i]]--;
        else return false;
    }
    return true;
};