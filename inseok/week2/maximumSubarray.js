/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
  const maxSubArray = [];
  let currentSum = nums[0];
  let maxSum = nums[0];
  for (let i = 1; i < nums.length; i += 1) {
      currentSum = Math.max(nums[i], currentSum + nums[i]);
      maxSum = Math.max(maxSum, currentSum);
  }
  return maxSum;
};

var maxSubArray = function(nums) {
  let maxSum = nums[0];
  for (let i = 1; i < nums.length; i += 1) {
    if (nums[i - 1] > 0) nums[i] += nums[i - 1];
    maxSum = Math.max(nums[i], maxSum);
  }
  return maxSum;
}
