/**
 * @param {number[]} A
 * @return {number}
 */
var peakIndexInMountainArray = function(A) {
  for (let i = 0; i < A.length; i += 1) {
    if (A[i] > A[i + 1]) {
      return i;
    }
  }
};