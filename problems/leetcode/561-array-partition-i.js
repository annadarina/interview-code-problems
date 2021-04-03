/**
 * @param {number[]} nums
 * @return {number}
 */
const arrayPairSum = function (nums) {
  nums = nums.sort((a, b) => a - b);
  let sum = 0;

  for (let i = 0; i < nums.length; i++) {
    sum += nums[i];
    i++;
  }

  return sum;
};

const output1 = arrayPairSum([1, 4, 3, 2]);
const output2 = arrayPairSum([6, 2, 6, 5, 1, 2]);
const output3 = arrayPairSum([1, 0, 0, 1]);
console.log(output1); // 4
console.log(output2); // 9
console.log(output3); // 1
