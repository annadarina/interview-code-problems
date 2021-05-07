/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */

const moveZeroes = function (nums) {
  for (let i = nums.length - 1; i >= 0; i--) {
    if (nums[i] === 0) {
      nums.splice(i, 1);
      nums.push(0);
    }
  }
};

const output1 = moveZeroes([0, 1, 0, 3, 12]);
const output2 = moveZeroes([0]);
console.log(output1); // [1,3,12,0,0]
console.log(output2); // [0]
