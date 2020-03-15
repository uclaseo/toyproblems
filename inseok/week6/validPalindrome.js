/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
  const findAlphanumeric = (a) => {
      return a.replace(/[^a-z0-9]/gi, '');
  }
  const alphanumeric = findAlphanumeric(s).toLowerCase();
  let i = 0;
  let j = alphanumeric.length - 1;
  while (i < j) {
      if (alphanumeric[i] !== alphanumeric[j]) {
          return false;
      }
      i += 1;
      j -= 1;
  }
  return true;
  // return alphanumeric === alphanumeric.split('').reverse().join('');
};