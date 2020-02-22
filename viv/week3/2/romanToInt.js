/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
    let num = 0;

    let numMap = {
        'I': 1,
        'V': 5,
        'X': 10,
        'L': 50,
        'C': 100,
        'D': 500,
        'M': 1000,
    };

    let subtractMap = {
        'I': {
            'V': 4,
            'X': 9,
        },
        'X': {
            'L': 40,
            'C': 90,
        },
        'C': {
            'D': 400,
            'M': 900,
        },
    };

    for (let i = 0; i < s.length; i++) {
        if (
            subtractMap[s[i]]
            && i+1 < s.length
            && subtractMap[s[i]][s[i+1]]
        ) {
            num += subtractMap[s[i]][s[i+1]];
            i++;
        } else {
            num += numMap[s[i]];
        }
    }

    return num;
};

let testS = "MCMXCIV";
console.log(romanToInt(testS));