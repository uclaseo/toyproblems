/**
 * @param {string[]} words
 * @param {string} order
 * @return {boolean}
 */
var isAlienSorted = function(words, order) {
  const map = {};
  for (let j = 0; j < order.length; j += 1) {
      map[order[j]] = j;
  }
  console.log(map)
  for (let i = 0; i < words.length - 1; i += 1) {
      const current = words[i];
      const next = words[i + 1];
      for (let j = 0; j < current.length; j += 1) {
          if (current[j] !== next[j]) {
              const currentIndex = map[current[j]];
              const nextIndex = map[next[j]];
              if (currentIndex > nextIndex || !nextIndex) {
                  return false;
              }
              break;
          }
      }

  }
  return true;
};