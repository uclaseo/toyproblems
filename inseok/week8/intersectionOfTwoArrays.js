var intersection = function(nums1, nums2) {
  const map = {};
  const result = [];
  for (let i = 0; i < nums1.length; i += 1) {
      map[nums1[i]] = true;
  }
  for (let j = 0; j < nums2.length; j += 1) {
      if (map[nums2[j]]) {
          result.push(nums2[j])
          map[nums2[j]] = false;
      }
  }
  return result;
};
