/**
 * @param {number[]} nums
 * @return {number[]}
 */
const sortArrayByParity = function (nums) {
  const result = [];

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] % 2 === 0) {
      result.unshift(nums[i]);
    } else {
      result.push(nums[i]);
    }
  }

  return result;
};

const output = sortArrayByParity([3, 1, 2, 4]);
console.log(output); // [2,4,3,1] or [4,2,3,1], [2,4,1,3], and [4,2,1,3]
