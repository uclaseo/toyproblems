var canJump = (nums) => {
  const memo = {};
  const recurse = (position) => {
    if (memo[position] === false) return false;
    if (position === nums.length - 1) return true;
    const furthest = Math.min(position + nums[position], nums.length - 1);
    for (let i = position + 1; i <= furthest; i += 1) {
      if (recurse(i)) {
        return true;
      }
    }
    memo[position] = false;
    return false;
  }
  return recurse(0);
}

const array = [3, 2, 1, 2, 0, 1, 5];


var canJump = (nums) => {
  const memo = {};
  memo[nums.length - 1] = true;
  
  for (let i = nums.length - 2; i >= 0; i -= 1) {
      const furthest = Math.min(i + nums[i], nums.length - 1)
      for (let j = i + 1; j <= furthest; j += 1) {
          if (memo[j] === true) {
              memo[i] = true;
              break;
          }
      }
  }
  return memo[0] === true;
}

for (let i = 0; i < 10; i += 1) {
  if (i === 5) {

    break;
  }
}

const canJump = (nums) => {
  let last = nums.length - 1;
  for (let i = nums.length - 1; i >= 0; i -= 1) {
      const furthest = Math.min(i + nums[i], nums.length - 1)
      if (furthest >= last) {
          last = i;
      }
  }
  return last === 0;
}