/**
 * @param {string} J
 * @param {string} S
 * @return {number}
 */
var numJewelsInStones = function(J, S) {
  const map = {};
  let count = 0;
  for (let i = 0; i < J.length; i += 1) {
      map[J[i]] = true;
  }
  for (let j = 0; j < S.length; j += 1) {
      if (map[S[j]]) {
          count += 1;
      }
  }
  return count;
};