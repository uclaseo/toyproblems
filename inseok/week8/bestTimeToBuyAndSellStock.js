var maxProfit = function(prices) {
  let min = prices[0];
  let highest = 0;
  for (let i = 0; i < prices.length; i += 1) {
      if (prices[i] <= min) {
          min = prices[i]
      } else if (prices[i] - min >= highest) {
          highest = prices[i] - min;
      }
  }
  return highest;
};