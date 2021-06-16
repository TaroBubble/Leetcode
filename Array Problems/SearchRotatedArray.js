/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function (nums, target) {
  if (nums.length === 0) return -1;
  let left = 0;
  let right = nums.length - 1;
  while (left <= right) {
    let midPoint = Math.floor((left + right) / 2);
    if (nums[midPoint] === target) return midPoint;
    if (nums[left] <= nums[midPoint]) {
      if (nums[left] <= target && target <= nums[midPoint])
        right = midPoint - 1;
      else left = midPoint + 1;
    } else {
      if (nums[midPoint] <= target && target <= nums[right])
        left = midPoint + 1;
      else right = midPoint - 1;
    }
  }
  return -1;
};
