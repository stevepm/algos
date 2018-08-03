const productExceptSelf = (nums) => {
  let p = 1;
  const output = [];
  nums.forEach(num => {
    output.push(p);
    p = p * num;
  });

  p = 1;
  for (let i = nums.length - 1; i >= 0; i--) {
    output[i] = output[i] * p;
    p = p * nums[i];
  }
  return output;
};

export default productExceptSelf;