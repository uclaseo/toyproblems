var maxProfit = function(prices) {
  let lowest = prices[0];
  let highest = 0;
  for (let i = 0; i < prices.length; i += 1) {
      if (prices[i] <= lowest) {
          lowest = prices[i];
      } else if (prices[i] - lowest > highest) {
          highest = prices[i] - lowest;
      }
  }
  return highest;
};