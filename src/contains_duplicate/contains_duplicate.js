const containsDuplicate = (list) => {
  const found = {};
  let duplicates = false;
  list.some(num => {
    if (found[num]) {
      duplicates = true;
      return true;
    }
    found[num] = true;
  });

  return duplicates;
};

export default containsDuplicate;