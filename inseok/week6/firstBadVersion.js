var solution = function(isBadVersion) {
  /**
   * @param {integer} n Total versions
   * @return {integer} The first bad version
   */
  return function(n) {
      // divide and conquer
      let start = 0;
      let end = n - 1;
      while (start < end) {
          let mid = Math.floor((start + end) / 2);
          const isBad = isBadVersion(mid + 1);
          if (isBad) {
              end = mid;
          } else {
              start = mid + 1;
          }
      }
      return start + 1;
  };
};