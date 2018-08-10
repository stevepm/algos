import findMin from './find_min_rotated_sorted_array';

test('1', () => {
  expect(findMin([4, 5, 6, 7, 0, 1, 2])).toEqual(0);
});

test('2', () => {
  expect(findMin([4, 5, 6, 7, 8, 0, 1, 2])).toEqual(0);
});

test('3', () => {
  expect(findMin([3, 4, 5, 1, 2])).toEqual(1);
});

test('4', () => {
  expect(findMin([1])).toEqual(1);
});

test('5', () => {
  expect(findMin([1,2,3,4,5,6,7,8,9,10])).toEqual(1);
});