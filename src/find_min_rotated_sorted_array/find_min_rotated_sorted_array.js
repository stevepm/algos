const findMin = function (nums) {
  if (nums.length === 1) {
    return nums[0];
  }
  let l = 0;
  let r = nums.length - 1;
  while (l < r) {
    const mid = Math.floor(l + (r - l) / 2);
    if (nums[mid] > nums[r]) { // > than mid contains smaller element
      if (nums[mid] > nums[mid + 1]) {
        return nums[mid + 1];
      } else {
        l = mid;
      }
    } else { // < than mid contains smaller element
      if (mid === 0 || nums[mid] < nums[mid - 1]) {
        return nums[mid];
      } else {
        r = mid;
      }
    }
  }
};

export default findMin;