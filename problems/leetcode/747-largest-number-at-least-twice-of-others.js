/**
 * @param {number[]} nums
 * @return {number}
 */
const dominantIndex = function (nums) {
  const max = Math.max(...nums);
  const indexOfMax = nums.indexOf(max);

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== max && 2 * nums[i] > max) {
      return -1;
    }
  }

  return indexOfMax;
};

const output1 = dominantIndex([3, 6, 1, 0]);
const output2 = dominantIndex([1, 2, 3, 4]);
const output3 = dominantIndex([0, 0, 0, 1]);
console.log(output1); // 1
console.log(output2); // -1
console.log(output3); // 3
