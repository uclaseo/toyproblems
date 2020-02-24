/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
  let string = String(x);
  if (string[string.length - 1] === '0') {
    string = string.slice(0, string.length - 1);
  }
  let result;
  if (string[0] === '-') {
    string = string.slice(1, string.length);
    result = Number('-' + string.split('').reverse().join(''))
  } else {
    result = Number(string.split('').reverse().join(''));
  }
  
  if (Math.abs(result) > Math.pow(2, 31) - 1) {
    return 0;
  } else {
    return result
  }
};

// using arithmetic

/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
  let result = 0;
  const minus = x < 0;
  if (minus) x = Math.abs(x);
  while (x / 10 > 0) {
    result *= 10;
    const popped = x % 10;
    x = (x - popped) / 10;
    result += popped;
  }
  if (Math.abs(result) > Math.pow(2, 31) - 1) {
    return 0;
  }
  return minus ? result * -1 : result
};