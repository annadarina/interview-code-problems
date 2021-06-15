/**
 * @param {number[]} nums
 * @return {number[]}
 */
const findDisappearedNumbers = function (nums) {
  const set = [...new Set(nums.sort((a, b) => a - b))];
  const result = [];

  for (let i = 1; i <= nums.length; i++) {
    if (!set.includes(i)) {
      result.push(i);
    }
  }

  return result;
};

const output1 = findDisappearedNumbers([4, 3, 2, 7, 8, 2, 3, 1]);
const output2 = findDisappearedNumbers([1, 1]);
console.log(output1); // [5, 6]
console.log(output2); // 2
