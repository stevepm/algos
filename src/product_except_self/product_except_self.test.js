import productExceptSelf from './product_except_self';

test('return array output such that output[i] is equal to the product of all elements of nums except nums[i]', () => {
  expect(productExceptSelf([1, 2, 3, 4])).toEqual([24, 12, 8, 6]);
});