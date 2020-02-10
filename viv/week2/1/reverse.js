/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    if (x > -10 && x < 10) return x;
    let strArr = x.toString().split('');
    let reversedStr = strArr[0] === '-' ? '-' : '';
    let endIndex = strArr[0] === '-' ? 1 : 0;
    for (let i = strArr.length - 1; i >= endIndex; i--) {
        if (
            strArr[i] === '0'
            && (reversedStr === '' || reversedStr === '-')
        ) continue;
        reversedStr += strArr[i];
        
    }
    let reversed = parseInt(reversedStr);
    return reversed >= Math.pow(-2, 31) && reversed <= Math.pow(2, 31) - 1 ? reversed : 0;
};

let testX = 1534236469;
console.log(reverse(testX));