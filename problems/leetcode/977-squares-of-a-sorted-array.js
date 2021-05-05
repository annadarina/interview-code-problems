/**
 * @param {number[]} nums
 * @return {number[]}
 */
const sortedSquares = function (nums) {
  for (let i = 0; i < nums.length; i++) {
    nums[i] = Math.pow(nums[i], 2);
  }

  return nums.sort((a, b) => a - b);
};

const output1 = sortedSquares([-4, -1, 0, 3, 10]);
const output2 = sortedSquares([-7, -3, 2, 3, 11]);
console.log(output1); // [0,1,9,16,100]
console.log(output2); // [4,9,9,49,121]
