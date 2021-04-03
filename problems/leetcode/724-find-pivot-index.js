/**
 * @param {number[]} nums
 * @return {number}
 */
const pivotIndex = function (nums) {
  let leftSum = 0;
  let rightSum = sum(nums);

  for (let i = 0; i < nums.length; i++) {
    rightSum -= nums[i];

    if (leftSum === rightSum) {
      return i;
    }

    leftSum += nums[i];
  }

  return -1;
};

function sum(arr) {
  return arr.reduce((acc, val) => acc + val, 0);
}

const output1 = pivotIndex([1, 7, 3, 6, 5, 6]);
const output2 = pivotIndex([1, 2, 3]);
const output3 = pivotIndex([2, 1, -1]);
console.log(output1); // 3
console.log(output2); // -1
console.log(output3); // 0
