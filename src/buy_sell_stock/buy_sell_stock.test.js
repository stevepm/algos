import maxProfit from './buy_sell_stock';

test('returns the max profit for the given list of prices', () => {
  expect(maxProfit([7, 1, 5, 3, 6, 4])).toEqual(5);
});

test('returns the max profit for the given list of prices', () => {
  expect(maxProfit([7, 6, 4, 3, 1])).toEqual(0);
});