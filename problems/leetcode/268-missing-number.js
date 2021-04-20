/**
 * @param {number[]} nums
 * @return {number}
 */
const missingNumber = function (nums) {
  nums = nums.sort((a, b) => a - b);

  for (let i = 0; i <= nums.length; i++) {
    if (i !== nums[i]) {
      return i;
    }
  }
};

const output1 = missingNumber([3, 0, 1]);
const output2 = missingNumber([0, 1]);
const output3 = missingNumber([9, 6, 4, 2, 3, 5, 7, 0, 1]);
const output4 = missingNumber([0]);
console.log(output1); // 2
console.log(output2); // 2
console.log(output3); // 8
console.log(output4); // 1
