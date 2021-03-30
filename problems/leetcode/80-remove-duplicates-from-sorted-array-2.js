/**
 * @param {number[]} nums
 * @return {number}
 */
const removeDuplicates = function(nums) {
  let i = 0;

  while (i < nums.length) {
    if (nums[i] === nums[i + 2]) {
      nums.splice(i, 1)
    } else {
      i++;
    }
  }

  return nums.length;
};

const output1 = removeDuplicates([1, 1, 1, 2, 2, 3]);
const output2 = removeDuplicates([0,0,1,1,1,1,2,3,3]);
console.log(output1); // 5
console.log(output2); // 7
