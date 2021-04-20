/**
 * @param {number[]} nums
 * @return {number}
 */
const singleNumber = function(nums) {
  const unique = Array.from(new Set(nums));

  const reduceSum = (a, b) => a + b;

  const uniqueSum = unique.reduce(reduceSum);
  const numsSum = nums.reduce(reduceSum);

  return uniqueSum * 2 - numsSum;
};

const output1 = singleNumber([2,2,1]);
const output2 = singleNumber([4,1,2,1,2]);
const output3 = singleNumber([1]);
console.log(output1); // 1
console.log(output2); // 4
console.log(output3); // 1
