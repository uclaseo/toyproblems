/**
 * @param {string} paragraph
 * @param {string[]} banned
 * @return {string}
 */
var mostCommonWord = function(paragraph, banned) {
  const bannedMap = {};
  banned.forEach(word => {
      bannedMap[word] = true;
  });
  const split = paragraph.split('');
  const map = {};
  const nonCharacter = {
      ' ': true,
      ',': true,
      '.': true,
      '!': true,
      '?': true,
      "'": true,
      ';': true,
  };
  let string = '';
  let mostCommonWord = '';
  let maxCount = 0;
  for (let i = 0; i < split.length; i += 1) {
      if (!nonCharacter[split[i]]) {
          string += split[i].toLowerCase();
          if (i === split.length - 1) {
              map[string] = map[string] ? map[string] += 1 : 1;
              if (map[string] >= maxCount && !bannedMap[string]) {
                  mostCommonWord = string;
                  maxCount = map[string];
              }
          }
      } else if (string !== ''){
          
          map[string] = map[string] ? map[string] += 1 : 1;
          if (map[string] >= maxCount && !bannedMap[string]) {
              mostCommonWord = string;
              maxCount = map[string];
          }
          string = '';
      }
  }
  return mostCommonWord;
  
};