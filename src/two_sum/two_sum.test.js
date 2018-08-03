import twoSum from './two_sum';

test('returns the first two indices that add up to the sum', () => {
  expect(twoSum([2, 7, 11, 15], 9)).toEqual([0, 1]);
});

test('returns the first two indices that add up to the sum', () => {
  expect(twoSum([8, 7, 2, 15], 9)).toEqual([1, 2]);
});