/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isIsomorphic = function(s, t) {
    let sMap = {};
    let tMap = {};
    for (let i = 0; i < s.length; i++) {
        if (
            sMap[s[i]]
            && tMap[t[i]]
            && sMap[s[i]]===t[i]
            && tMap[t[i]]===s[i]
        ) {
            continue;
        } else if (
            sMap[s[i]] === undefined
            && tMap[t[i]] === undefined
        ) {
            sMap[s[i]] = t[i];
            tMap[t[i]] = s[i];
        } else return false;
    }
    return true;
};