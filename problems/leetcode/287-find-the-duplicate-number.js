/**
 * @param {number[]} nums
 * @return {number}
 */
const findDuplicate = function (nums) {
  const map = {};

  for (let key of nums) {
    if (map[key]) {
      return key;
    } else {
      map[key] = 1;
    }
  }
};

const output1 = findDuplicate([1, 3, 4, 2, 2]);
const output2 = findDuplicate([3, 1, 3, 4, 2]);
const output3 = findDuplicate([1, 1]);
const output4 = findDuplicate([1, 1, 2]);
console.log(output1); // 2
console.log(output2); // 3
console.log(output3); // 1
console.log(output4); // 1

