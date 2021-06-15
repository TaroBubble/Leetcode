/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
  let collection = new Map();
  for (let i = 0; i < nums.length; i++) {
    if (collection.has(target - nums[i]))
      return [collection.get(target - nums[i]), i];
    collection.set(nums[i], i);
  }
  return [];
};
