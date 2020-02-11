/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function(haystack, needle) {
  if (needle.length === 0) return 0;
  for (let i = 0; i < haystack.length; i += 1) {
      if (haystack[i] === needle[0]) {
          let truthy = true;
          for (let j = 1; j < needle.length; j += 1) {
              if (haystack[i + j] !== needle[j]) {
                  truthy = false;
              }
          }
          if (truthy) {
              return i;
          }
          
      }
  }
  return -1;
};

var strStr = function(haystack, needle) {
  for (let i = 0; i < haystack.length - needle.length + 1; i += 1) {
      if (haystack.slice(i, i + needle.length) === needle) {
          return i;
      }
  }
  return -1;
};