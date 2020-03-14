var isValid = function(s) {
  const stack = [];
  const map = {
      '[' : ']',
      '{' : '}',
      '(' : ')',
  };
  for (let i = 0; i < s.length; i += 1) {
      if (map[s[i]]) {
          stack.push(s[i]);
      } else {
          const popped = stack.pop();
          if (map[popped] !== s[i]) {
              return false;
          }
      }
  }
  return stack.length === 0;
}