var maxSubArray = function(nums) {
  let current = nums[0];
  let max = nums[0];
  for (let i = 1; i < nums.length; i += 1) {
      if (current < 0) {
          current = nums[i];
      } else {
          current += nums[i];
      }
      if (current >= max) {
          max = current;
      }
  }
  return max;
};