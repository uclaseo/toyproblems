var plusOne = function(digits) {
  let currentCarryOnValue = 1;
  for(let i = digits.length - 1; i >= 0; i -= 1) {
      digits[i] += currentCarryOnValue;
      if(digits[i] === 10) {
          digits[i] = 0;
          currentCarryOnValue = 1;
      } else {
          currentCarryOnValue = 0;
      }
  }
  if(currentCarryOnValue === 1) digits.unshift(1);
  return digits;
};
