/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function (height) {
  let res = 0;
  let left = 0;
  let right = height.length - 1;
  while (left < right) {
    let minSide = Math.min(height[left], height[right]);
    res = Math.max(res, minSide * (right - left));
    if (height[left] < height[right]) left++;
    else right--;
  }
  return res;
};
