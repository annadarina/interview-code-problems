/**
 * @param {number} x
 * @return {boolean}
 */
let isPalindrome = function (x) {
  if (x < 0) return false;

  let current = 0;
  let mod = x;

  while (mod > 0) {
    current = (current * 10) + (mod % 10);
    mod = Math.floor(mod / 10);
  }
  return current === x;
};

const output1 = isPalindrome(121);
const output2 = isPalindrome(12);
const output3 = isPalindrome(-212);
console.log(output1); // true
console.log(output2); // false
console.log(output3); // false
