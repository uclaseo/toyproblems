var twoSum = function(nums, target) {
  const map = {};
  for (let i = 0; i < nums.length; i += 1) {
      if (map[target - nums[i]] >= 0) {
          return [i, map[target - nums[i]]];
      } else {
          map[nums[i]] = i;
      }
  }
};