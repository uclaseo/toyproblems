/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    if (s === null) return true;
    if (s.length % 2 !== 0) return false;

    let lookup = {
        '(': ')',
        '{': '}',
        '[': ']',
    };

    let stack = [];

    for (let i = 0; i < s.length; i++) {
        let currChar = s.charAt(i);
        if (lookup[currChar] === undefined) {
            if (lookup[stack[stack.length-1]] === currChar) stack.pop();
            else return false;
        } else stack.push(currChar);
    }

    return stack.length === 0;
};

let s = "((";
console.log(isValid(s));