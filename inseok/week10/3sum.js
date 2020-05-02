function threeSum(nums) {
	const result = [];
    if (nums.length < 3) return result;
    nums = nums.sort((a, b) => a - b);
    for (let i = 0; i < nums.length - 2; i += 1) {
        if (nums[i] > 0) {
            break;
        }
        if (nums[i] === nums[i - 1]) continue
        let j = i + 1;
        let k = nums.length - 1;
        if (j >= k) {
            break;
        }
        while (j < k) {
            const sum = nums[i] + nums[j] + nums[k];
            if (sum < 0) {
                j += 1;
            } else if (sum > 0) {
                k -= 1;
            } else {
                result.push([nums[i], nums[j], nums[k]]);
                while (nums[j] === nums[j + 1]) j += 1;
                while (nums[k] === nums[k - 1]) k -= 1;
                j += 1;
                k -= 1;
            }
        }
    }
	return result;
};

