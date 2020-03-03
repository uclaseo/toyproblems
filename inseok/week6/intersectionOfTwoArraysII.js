var intersect = function(nums1, nums2) {
    const result = [];
    const map = {};
    for (let i = 0; i < nums1.length; i += 1) {
        if (!map[nums1[i]]) {
            map[nums1[i]] = 1;
        } else {
            map[nums1[i]] += 1;
        }
    }
    for (let j = 0; j < nums2.length; j += 1) {
        if (map[nums2[j]] > 0) {
            map[nums2[j]] -= 1;
            result.push(nums2[j]);
        }
    }
    return result;
};
var intersect = function(nums1, nums2) {
  // if nums1 and nums2 are sorted
  nums1.sort((a, b) => a - b);
  nums2.sort((a, b) => a - b);
  const result = [];
  let i = 0;
  let j = 0;
  while (i < nums1.length && j < nums2.length) {
      console.log('i', i)
      console.log('j', j)
      if (nums1[i] < nums2[j]) {
          i += 1;
      } else if (nums1[i] > nums2[j]) {
          j += 1;
      } else if (nums1[i] === nums2[j]) {
          result.push(nums1[i]);
          i += 1;
          j += 1;
      }
  }
  return result;
};