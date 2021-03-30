/**
 * @param {number[]} nums
 * @return {number[][]}
 */
const threeSum = function (nums) {
  let result = [];
  let target = 0;

  if (nums.length < 3) {
    return result;
  }

  nums = nums.sort((a, b) => a - b);

  for (let i = 0; i < nums.length - 2; i++) {
    if (nums[i] > target) {
      break;
    }

    if (i > 0 && nums[i] === nums[i - 1]) {
      continue;
    }

    let j = i + 1;
    let k = nums.length - 1;

    while (j < k) {
      let sum = nums[i] + nums[j] + nums[k];

      if (sum === target) {
        result.push([nums[i], nums[j], nums[k]]);
        while (nums[j] === nums[j + 1]) j++;
        while (nums[k] === nums[k - 1]) k--;
        j++;
        k--;
        continue;
      }

      if (sum < target) {
        j++;
        continue;
      }

      if (sum > target) {
        k--;
        continue;
      }
    }
  }

  return result;
};

const output1 = threeSum([-1, 0, 1, 2, -1, -4]);
const output2 = threeSum([0]);
console.log(output1); // [[-1,-1,2],[-1,0,1]]
console.log(output2); // []
