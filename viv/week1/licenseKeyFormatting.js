/**
 * @param {string} S
 * @param {number} K
 * @return {string}
 */
var licenseKeyFormatting = function(S, K) {
    // get key without hyphens
    let key = S.replace(/-/g, '');

    // calculate length of 1st group (should be at least 1)
    let firstGroupLen = key.length % K === 0 ? K : key.length % K;

    // init formatted with first group
    let formatted = key.substring(0, firstGroupLen);

    // keep track of number of chars in group
    let groupCharCount = 0;

    for (let i = firstGroupLen; i < key.length; i++) {
        // if new group, concat hypen
        if (groupCharCount === 0) formatted += '-';

        formatted += key.charAt(i);

        if (groupCharCount + 1 === K) groupCharCount = 0;
        else groupCharCount++;
    }
    
    return formatted.toUpperCase();
};

let S = "2-5g-3-J";
let K = 2;
console.log(licenseKeyFormatting(S, K));