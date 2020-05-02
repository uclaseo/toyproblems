/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var multiply = function(num1, num2) {
  const result = new Array(num1.length + num2.length);
  result.fill(0)
  for (let i = num1.length - 1; i >= 0; i -= 1) {
      for (let j = num2.length - 1; j >= 0; j -= 1) {
        // if (result[i + j] === undefined) result[i + j] = 0;
        // if (result[i + j + 1] === undefined) result[i + j + 1] = 0;
          const product = parseInt(num1[i]) * parseInt(num2[j]);
          result[i + j + 1] += product % 10;
          if (result[i + j + 1] >= 10) {
              result[i + j] += Math.floor(result[i + j + 1] / 10);
              result[i + j + 1] = result[i + j + 1] % 10;
          }
          if (product >= 10) {
              result[i + j] += Math.floor(product / 10);
              if (result[i + j] >= 10) {
                  result[i + j - 1] += Math.floor(result[i + j] / 10);
                  result[i + j] = result[i + j] % 10;
              }
          }
      }
  }
  let isLeadingZero = true;
  let string = '';
  result.forEach((digit) => {
      if (!isLeadingZero) {
          string += digit;
      } else if (digit !== 0) {
          isLeadingZero = false;
          string += digit;
      }
  });
  if (!string) return '0';
  return string;
};

