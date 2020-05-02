var reverse = function(x) {
  // use string
  // const string = String(x);
  // let negative = false;
  // if (string[0] === '-') {
  //     negative = true;
  // }
  // let result = '';
  // let leadingZero = true;
  // for (let i = string.length - 1; i >= 0; i -= 1) {
  //     if (leadingZero && string[i] === '0') {
  //         continue;
  //     }
  //     leadingZero = false;
  //     if (i === 0 && negative) {
  //         result = `-${result}`;
  //         break;
  //     }
  //     result += string[i];
  // }
  // console.log('Math.pow(2,31)', Math.pow(2,31))
  // console.log('Math.pow(2, -31)', Math.pow(2,-31))
  // if (Number(result) > Math.pow(2, 31)) {
  //     return 0;
  // } else if (Number(result) < Math.pow(-2, 31)) {
  //     return 0;
  // } else {
  //     return Number(result);
  // }
  
  // use number
  let absoluteX = Math.abs(x);
  let number = 0;
  const isNegative = x < 0;
  while (absoluteX > 0) {
      const firstDigit = absoluteX % 10;
      number = number * 10 + firstDigit;
      absoluteX = Math.floor(absoluteX / 10);
  }
  if (isNegative) {
      number *= -1;
  }
  if (number > Math.pow(2, 31)) {
      return 0;
  } else if (number < Math.pow(-2, 31)) {
      return 0;
  } else {
      return number;
  }
};