const twoSum = (nums, target) => {
  const els = {};
  let indices;

  nums.forEach((num, i) => {
    if (indices) return;

    const lookingFor = target - num;
    if (els[lookingFor]) {
      indices = [els[lookingFor] - 1, i];
    } else {
      els[num] = i + 1;
    }
  });

  return indices;
};

export default twoSum;