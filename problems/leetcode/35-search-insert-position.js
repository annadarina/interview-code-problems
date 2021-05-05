/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
const searchInsert = function (nums, target) {
  nums.push(target);
  nums.sort((a, b) => a - b);
  return nums.indexOf(target);
};

const output1 = searchInsert([1, 3, 5, 6], 5);
const output2 = searchInsert([1, 3, 5, 6], 2);
const output3 = searchInsert([1, 3, 5, 6], 7);
const output4 = searchInsert([1, 3, 5, 6], 0);
const output5 = searchInsert([1], 0);
const output6 = searchInsert([2, 3, 4, 8, 10], 0);
console.log(output1); // 2
console.log(output2); // 1
console.log(output3); // 4
console.log(output4); // 0
console.log(output5); // 0
console.log(output6); // 0
