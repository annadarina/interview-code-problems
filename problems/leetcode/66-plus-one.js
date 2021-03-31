/**
 * @param {number[]} digits
 * @return {number[]}
 */
const plusOne = function (digits) {
  for (let i = digits.length - 1; i >= 0; i--) {
    if (digits[i] !== 9) {
      digits[i]++;
      return digits;
    } else {
      digits[i] = 0;
    }
  }

  digits.unshift(1);

  return digits;
};

const output1 = plusOne([1, 2, 3]);
const output2 = plusOne([4, 3, 2, 1]);
const output3 = plusOne([0]);
console.log(output1); // [1,2,4]
console.log(output2); // [4,3,2,2]
console.log(output3); // [1]

