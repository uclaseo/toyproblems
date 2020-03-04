var isPalindrome = function(s) {
  const findAlphanumeric = (a) => {
      return a.replace(/[^a-z0-9]/gi, '');
  }
  const alphanumeric = findAlphanumeric(s).toLowerCase();
  return alphanumeric === alphanumeric.split('').reverse().join('');
};