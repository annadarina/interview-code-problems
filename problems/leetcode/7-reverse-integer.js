/**
 * @param {number} x
 * @return {number}
 */
const reverse = function(x) {
  let negative = x < 0;
  let reversed = 0;

  if (negative) {
    x *= -1;
  }

  while (x > 0) {
    reversed = (reversed * 10) + (x % 10);
    x = Math.floor(x / 10);
  }

  if (reversed > (2 ** 31 - 1)) {
    return 0;
  }

  return negative ? (reversed * -1) : reversed;
};

const output1 = reverse(123);
const output2 = reverse(1233445566645);
const output3 = reverse(-45690);
console.log(output1); // 321
console.log(output2); // 0
console.log(output3); // -9654
