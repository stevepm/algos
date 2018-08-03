import containsDuplicate from './contains_duplicate';

test('returns true if any value appears twice in the array', () => {
  expect(containsDuplicate([1, 2, 3, 1])).toEqual(true);
});

test('returns true if any value appears twice in the array', () => {
  expect(containsDuplicate([1, 1, 1, 3, 3, 4, 3, 2, 4, 2])).toEqual(true);
});

test('returns false if no value appears twice in the array', () => {
  expect(containsDuplicate([1, 2, 3, 4])).toEqual(false);
});