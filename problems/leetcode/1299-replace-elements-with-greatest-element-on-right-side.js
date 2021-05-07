/**
 * @param {number[]} arr
 * @return {number[]}
 */

const replaceElements = function (arr) {
  arr.splice(0, 1);
  arr.push(-1);
  let max = -Infinity;

  for (let i = arr.length - 1; i >= 0; i--) {
    max = Math.max(arr[i], max);
    arr[i] = max;
  }

  return arr;
};

const output1 = replaceElements([17, 18, 5, 4, 6, 1]);
const output2 = replaceElements([400]);
console.log(output1); // [18,6,6,6,1,-1]
console.log(output2); // [-1]
