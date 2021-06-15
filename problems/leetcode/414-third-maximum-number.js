/**
 * @param {number[]} nums
 * @return {number}
 */
const thirdMax = function (nums) {
  const unique = [...new Set(nums.sort((a, b) => b - a))];
  if (unique.length < 3) {
    return unique[0];
  }

  return unique[2];
};

const output1 = thirdMax([3, 2, 1]);
const output2 = thirdMax([1, 2]);
const output3 = thirdMax([2, 2, 3, 1]);
console.log(output1); // 1
console.log(output2); // 2
console.log(output3); // 1
