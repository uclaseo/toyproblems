/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
  let i = 0;
  let j = 1;
  let counter = 0;
  while (j < nums.length) {
      if (nums[i] === nums[j]) {
          j += 1;
          counter += 1;
      } else {
          nums[i + 1] = nums[j]
          i += 1;
          j += 1;
      }
  }
  while (counter > 0) {
      nums.pop();
      counter -= 1;
  }
};