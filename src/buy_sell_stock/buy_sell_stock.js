const maxProfit = (prices) => {
  let mostProfit = 0;
  let currentMin = prices[0];

  prices.forEach((price) => {
    mostProfit = Math.max(mostProfit, price - currentMin);
    currentMin = Math.min(currentMin, price);
  });

  return mostProfit;
};

export default maxProfit;