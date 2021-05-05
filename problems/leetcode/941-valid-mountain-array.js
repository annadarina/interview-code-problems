/**
 * @param {number[]} arr
 * @return {boolean}
 */
const validMountainArray = function (arr) {
  if (arr.length < 3) {
    return false;
  }

  let increasing = false;
  let decreasing = false;

  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] === arr[i + 1]) {
      return false;
    } else if (arr[i] < arr[i + 1]) {
      increasing = true;

      if (decreasing) {
        return false;
      }
    } else {
      decreasing = true;
    }
  }

  return increasing && decreasing;
};

const output1 = validMountainArray([2, 1]);
const output2 = validMountainArray([3, 5, 5]);
const output3 = validMountainArray([0, 3, 2, 1]);
const output4 = validMountainArray([0, 1, 2, 3, 4, 5, 6, 7, 8, 9]);
console.log(output1); // false
console.log(output2); // false
console.log(output3); // true
console.log(output4); // false
