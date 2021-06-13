/**
 * @param {number[]} heights
 * @return {number}
 */
const heightChecker = function (heights) {
  const expected = [...heights].sort((a, b) => a - b);
  let count = 0;

  for (let i = 0; i < heights.length; i++) {
    if (heights[i] !== expected[i]) {
      count += 1;
    }
  }

  return count;
};

const output1 = heightChecker([1, 1, 4, 2, 1, 3]);
const output2 = heightChecker([5, 1, 2, 3, 4]);
const output3 = heightChecker([1, 2, 3, 4, 5]);
console.log(output1); // 3
console.log(output2); // 5
console.log(output3); // 0
