var isValid = function(s) {
  const map = {
    '{' : '}',
    '[' : ']',
    '(' : ')',
  };
  const stack = [];
  for (let i = 0; i < s.length; i += 1) {
    if (map[s[i]]) {
      stack.push(s[i]);
    } else {
      const length = stack.length;
      if (map[stack[length - 1]] !== s[i]) {
        return false;
      } else {
        stack.pop();
      }
    }
  }
  return stack.length === 0;
};