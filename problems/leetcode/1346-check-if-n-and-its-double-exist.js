/**
 * @param {number[]} arr
 * @return {boolean}
 */
const checkIfExist = function (arr) {
  const map = {};

  for (let i = 0; i < arr.length; i++) {
    const current = arr[i];
    const double = current * 2;
    const half = current / 2;

    if (map[double] >= 0 || map[half] >= 0) {
      return true;
    }

    if (!map[current]) {
      map[current] = i;
    }
  }

  return false;
};

const output1 = checkIfExist([10, 2, 5, 3]);
const output2 = checkIfExist([7, 1, 14, 11]);
const output3 = checkIfExist([3, 1, 7, 11]);
console.log(output1); // true
console.log(output2); // true
console.log(output3); // false
