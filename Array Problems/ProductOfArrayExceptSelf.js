let arr = [1, 2, 3, 4];

const solution = (nums) => {
  let left = [];
  let right = [];
  let multiply = 1;
  for (let i = 0; i < nums.length; i++) {
    left[i] = multiply;
    multiply *= nums[i];
  }
  let rightMult = 1;
  for (let i = nums.length - 1; i >= 0; i--) {
    right[i] = rightMult;
    rightMult *= nums[i];
  }

  for (let i = 0; i < nums.length; i++) {
    right[i] *= left[i];
  }

  return right;
};

solution(arr);
