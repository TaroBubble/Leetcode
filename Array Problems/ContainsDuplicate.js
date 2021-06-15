var containsDuplicate = function (nums) {
  let collection = {};
  for (let i = 0; i < nums.length; i++) {
    collection[nums[i]] = collection[nums[i]] + 1 || 1;
    if (collection[nums[i]] > 1) {
      return true;
    }
  }
  return false;
};
