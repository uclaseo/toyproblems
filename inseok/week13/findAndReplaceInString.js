/**
 * @param {string} S
 * @param {number[]} indexes
 * @param {string[]} sources
 * @param {string[]} targets
 * @return {string}
 */
var findReplaceString = function(S, indexes, sources, targets) {
  const result = S.split('');
  
  indexes.forEach((index, i) => {
      if (S.slice(index, index + sources[i].length) === sources[i]) {
          result[index] = targets[i];
          let loopCount = 1;
          while (loopCount < sources[i].length) {
              result[index + loopCount] = '';
              loopCount += 1;
          }
      }
  })
  return result.join('');
};