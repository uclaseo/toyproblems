/**
 * @param {number[]} nums
 * @return {number}
 */
// var missingNumber = function(nums) {
//     const map = {};
//     for (let i = 0; i < nums.length; i += 1) {
//         map[nums[i]] = true;
//     }
//     for (let j = 0; j <= nums.length; j += 1) {
//         if (!map[j]) {
//             return j;
//         }
//     }
// };
// var missingNumber = function(nums) {
//     const map = {};
//     for (let i = 0; i < nums.length; i += 1) {
//         map[nums[i]] = true;
//     }
//     for (let j = 0; j <= nums.length; j += 1) {
//         if (map[j] === undefined) {
//             return j;
//         }
//     }
// };
var missingNumber = function(nums) {
  // Gauss Formula: n(n + 1) / 2 is sum of numbers
  const expectedTotalSum = nums.length * (nums.length + 1) / 2;
  const actualTotalSum = nums.reduce((acc, curr) => acc += curr, 0);
  return expectedTotalSum - actualTotalSum;
};