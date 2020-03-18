/**
 * @param {number[]} A
 * @return {number[]}
 */
var sortedSquares = function(A) {
  let positiveIndex = A.length - 1;
  for (let i = 0; i < A.length; i += 1) {
      if (A[i] >= 0) {
          positiveIndex = i;
          break;
      }
  }
  const result = [];
  let p1 = positiveIndex;
  let p2 = positiveIndex -1;
  while (p1 < A.length || p2 >= 0) {
      if (p2 < 0) {
          result.push(A[p1] * A[p1])
          p1 += 1;
      } else if (p1 === A.length) {
          result.push(A[p2] * A[p2])
          p2 -= 1;
      } else if (Math.abs(A[p1]) < Math.abs(A[p2])) {
          result.push(A[p1] * A[p1])
          p1 += 1;
      } else {
          result.push(A[p2] * A[p2])
          p2 -= 1;
      }
  }
  return result;
};
