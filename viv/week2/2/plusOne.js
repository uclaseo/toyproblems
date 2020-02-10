/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
    let tempSum = 0;
    let carryOver = 1;
    for (let i = digits.length-1; i > -1; i--) {
        tempSum = digits[i] + carryOver;
        if (tempSum > 9) digits[i] = tempSum - 10;
        else {
            digits[i]++;
            return digits;
        }
    }
    return `1${digits.join('')}`.split('').map(x => +x);
};

let testDigits = [9,9];
console.log(plusOne(testDigits));