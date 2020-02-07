/**
 * @param {string} secret
 * @param {string} guess
 * @return {string}
 */
var getHint = function(secret, guess) {
  const map = {};
  const indexMap = {};
  let bulls = 0;
  let cows = 0;
  for (let i = 0; i < secret.length; i += 1) {
      if (secret[i] === guess[i]) {
          bulls += 1;
          indexMap[i] = true;
      } else {
          map[secret[i]] ? map[secret[i]] += 1 : map[secret[i]] = 1;
      }
  }
  for (let j = 0; j < secret.length; j += 1) {
      if (map[guess[j]] && !indexMap[j]) {
          map[guess[j]] -= 1;
          cows += 1;
      }
  }
  console.log(map)
  return `${bulls}A${cows}B`;
};

// time complexity: O(2N) => O(N)
// space complexity: O(1)