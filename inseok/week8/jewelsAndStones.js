var numJewelsInStones = function(J, S) {
  const map = {};
  let counter = 0;
  for (let i = 0; i < J.length; i += 1) {
      map[J[i]] = true;
  }
  for (let j = 0; j < S.length; j += 1) {
      if (map[S[j]]) {
          counter += 1;
      }
  }
  return counter;
};

var numJewelsInStones = function(J, S) {
  let counter = 0;
  for (let i = 0; i < S.length; i += 1) {
      if (J.indexOf(S[i]) >= 0) {
          counter += 1;
      }
  }
  return counter;
};
