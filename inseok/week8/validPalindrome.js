var isPalindrome = function(s) {
  const validateAlphanumeric = (letter) => {
      const code = letter.charCodeAt(0)
      if (
          !(code > 47 && code < 58) &&
          !(code > 64 && code < 91) &&
          !(code > 96 && code < 123)
      ) return false;
      return true;
  }
  if (s === '') return true;
  let p1 = 0;
  let p2 = s.length - 1;
  while (p1 < p2) {
      if (!validateAlphanumeric(s[p1])) {
          p1 += 1;
          continue;
      } else if (!validateAlphanumeric(s[p2])) {
          p2 -= 1;
          continue;
      } else if (s[p1].toLowerCase() !== s[p2].toLowerCase()) {
          return false;
      }
      p1 += 1;
      p2 -= 1;
  }
  return true;
};

