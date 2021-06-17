/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function (nums) {
  let res = [[]];
  let arr = [];
  for (let num of nums) {
    arr = [];
    for (let item of res) {
      arr.push([...item, num]);
    }
    res.push(...arr);
  }
  return res;
};
