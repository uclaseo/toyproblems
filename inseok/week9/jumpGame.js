var canJump = function(nums) {
  // brute force
  if (nums && nums.length === 1) {
      return true;
  } else if (!nums) {
      return false;
  }
  const firstNum = nums[0]
  for (let i = 0; i < nums.length - 1 && i < firstNum; i += 1) {
      let counter = nums[i];
      while (counter > 0) {
          if (canJump(nums.slice(counter))) {
              return true;
          }
          counter -= 1;
      }
  }
  return false;
};

var canJump = function(nums) {
  // stack
  const stack = [];
  const map = {};
  for (let i = 0; i < nums.length; i += 1) {
      map[i] = {
          num: nums[i],
          index: i
      };
  }
  stack.push(map[0]);
  while (stack.length > 0) {
      const { num, index } = stack.pop();
      if (index === nums.length - 1) {
          return true;
      }
      for (let j = 1; j <= num; j += 1) {
          if (!map[index + j]) {
              return true;
          }
          stack.push(map[index + j]);
      }
  }
  console.log(map)
  return false;
};