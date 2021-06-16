/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProduct = function (nums) {
  let currMax = 1;
  let currMin = 1;
  let maxProd = -Infinity;

  for (let i = 0; i < nums.length; i++) {
    let prevMax = currMax;
    currMax = Math.max(nums[i] * prevMax, nums[i], nums[i] * currMin);
    currMin = Math.min(nums[i] * prevMax, nums[i], nums[i] * currMin);
    maxProd = Math.max(maxProd, currMax);
  }
  return maxProd;
};
