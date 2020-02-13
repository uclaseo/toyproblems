/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function(nums) {
    let sorted = nums.sort();
    // if (sorted[sorted.length-1] !== sorted.length) return sorted.length;
    // if (sorted[0] !== 0) return 0;
    for (let i=1; i < sorted.length; i++) {
        let expected = sorted[i-1] + 1;
        if (sorted[i] !== expected) return expected;
    }
};