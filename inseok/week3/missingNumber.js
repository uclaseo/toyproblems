/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function(nums) {
  const map = {};
  for (let i = 0; i < nums.length; i += 1) {
      map[nums[i]] = true;
  }
  for (let j = 0; j <= nums.length; j += 1) {
      if (!map[j]) {
          return j;
      }
  }
};
