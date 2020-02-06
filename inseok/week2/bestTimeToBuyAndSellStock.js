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
// Time Complexity: O(N^2)
// Space Complexity: O(1)

// better solution
var maxProfit = function(prices) {
  let minPrice = prices[0];
  let maxPrice = 0;
  for (let i = 0; i < prices.length; i += 1) {
    if (prices[i] <= minPrice) {
      minPrice = prices[i];
    } else if (prices[i] - minPrice > maxPrice) {
      maxPrice = prices[i] - minPrice
    }
  }
  return maxPrice
};
// Time Complexity: O(N)
// Space Complexity: O(1)