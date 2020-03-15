const validPalindrome = (s) => {
  for (let i = 0, stop = s.length / 2; i < stop; i++) {
      let j = s.length - i - 1
      if (s[i] !== s[j]) {
          return isPalindrome(cut(s, i)) || isPalindrome(cut(s, j))
      }
  }
  return true
};

const cut = (s, i) => s.substring(0, i) + s.substring(i + 1);

const isPalindrome = (s) => s === s.split('').reverse().join('');