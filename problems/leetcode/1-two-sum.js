/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

const twoSum = function (nums, target) {
  let map = {};

  for (let i = 0; i < nums.length; i++) {
    map[nums[i]] = i;
  }

  for (let i = 0; i < nums.length; i++) {
    let diff = target - nums[i];

    if (map[diff] && map[diff] !== i) {
      return [i, map[diff]];
    }
  }
};

const output1 = twoSum([2, 7, 11, 15], 9);
const output2 = twoSum([3, 2, 4], 6);
console.log(output1); // [0,1]
console.log(output2); // [1,2]
