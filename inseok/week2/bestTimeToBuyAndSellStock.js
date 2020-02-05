/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
  let max = 0;
  for (let i = 0; i < prices.length - 1; i += 1) {
    for (let j = i + 1; j < prices.length; j += 1) {
      if (prices[i] > prices[j]) {
        continue;
      }
      if (prices[j] - prices[i] > max) {
        max = prices[j] - prices[i];
      }
    }
  }
  return max;
};