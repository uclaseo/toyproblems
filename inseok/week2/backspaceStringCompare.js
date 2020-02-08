/**
 * @param {string} S
 * @param {string} T
 * @return {boolean}
 */
var backspaceCompare = function(S, T) {
  let stringOne = '';
  let stringTwo = '';
  for (let i = 0; i < S.length; i += 1) {
      if (S[i] !== '#') {
          stringOne += S[i];
      } else {
          stringOne = stringOne.slice(0, stringOne.length - 1);
      }
  }
  for (let j = 0; j < T.length; j += 1) {
      if (T[j] !== '#') {
          stringTwo += T[j];
      } else {
          stringTwo = stringTwo.slice(0, stringTwo.length - 1);
      }
  }
  return stringOne === stringTwo;
};
