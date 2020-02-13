/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function(haystack, needle) {
    if (needle === '') return 0;
    
    let hLen = haystack.length;
    let nLen = needle.length;

    if (nLen <= hLen) {
        for (let i=0; i<hLen; i++) {
            if (haystack[i] === needle[0]) {
                let tempLen = 1;
                for (let j=1; j<nLen; j++) {
                    if (haystack[i+j] !== needle[j]) {
                        break;
                    }
                    tempLen++;
                }
                if (tempLen === nLen) return i;
            }
        }
    }
        
    return -1;
};

let testH = "a";
let testN = "a";
console.log(strStr(testH, testN));