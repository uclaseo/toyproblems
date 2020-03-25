/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var multiply = function(num1, num2) {
  if (num1 === '0' || num2 === '0') { return '0'; }
  
  const result = new Array(num1.length + num2.length);
  result.fill(0);
  let outerPlace = num1.length + num2.length - 1;
  for (let i = num1.length - 1; i >= 0; i -= 1) {
      let innerPlace = outerPlace;
      for (let j = num2.length - 1; j >= 0; j -= 1) {
          const product = parseInt(num1[i]) * parseInt(num2[j]);
          result[innerPlace] += product % 10;
          if (result[innerPlace] >= 10) {
              result[innerPlace] %= 10;
              result[innerPlace - 1] += 1;
          }
          result[innerPlace - 1] += Math.floor(product / 10);
          if (result[innerPlace - 1] >= 10) {
              result[innerPlace - 1] %= 10;
              result[innerPlace - 2] += 1;
          }
          innerPlace -= 1;
      }
      outerPlace -= 1;
  }
  
  let string = '';
  let trailingZero = true;
  result.forEach((num) => {
      console.log('h')
      if (!(trailingZero && num === 0)) {
          string += num;
          trailingZero = false;
      }
  });
  
  return string;

//     let product = new Array(num1.length + num2.length);
//     product.fill(0);
//     let pos = product.length - 1;

//     for (let i = num1.length - 1; i >= 0; i--) {
//         let tempPos = pos;
//         for (let j = num2.length - 1; j >= 0; j--) {
//             product[tempPos] += parseInt(num1.charAt(i)) * parseInt(num2.charAt(j));
//             product[tempPos-1] += Math.floor(product[tempPos] / 10); // carry
//             product[tempPos] %= 10;
//             tempPos -= 1;
//         }
//         pos -= 1;
//     }
//     console.log('product', product)
//     return product.join("").replace(/^0+/, "");
};