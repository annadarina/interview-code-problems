/**
 * @param {number[]} nums
 * @return {number}
 */
const removeDuplicates = function (nums) {
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === nums[i - 1]) {
      nums.splice(i, 1);
      i--;
    }
  }

  return nums.length;
};

const output1 = removeDuplicates([1, 1, 2]);
const output2 = removeDuplicates([0, 0, 1, 1, 1, 2, 2, 3, 3, 4]);
console.log(output1); // 2
console.log(output2); // 5


const removeDuplicates2 = function (nums) {
  for (let i = 0; i < nums.length; i++) {

    if (nums[i] === nums[i - 2]) {
      nums.splice(i, 1);
      i--;
    }
  }

  return nums.length;
};

const output12 = removeDuplicates2([1,1,1,2,2,3]);
// const output2 = removeDuplicates2([0, 0, 1, 1, 1, 2, 2, 3, 3, 4]);
console.log(output12); // 2
// console.log(output2); // 5
