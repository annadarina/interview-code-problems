/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
const addStrings = function (num1, num2) {
  const length = Math.max(num1.length, num2.length) + 1;
  const result = new Array(length);
  let carry = 0;

  for (let i = 0; i < length; i++) {
    const digit1 = parseFloat(num1[num1.length - 1 - i] || 0, 10);
    const digit2 = parseFloat(num2[num2.length - 1 - i] || 0, 10);

    let sum = digit1 + digit2 + carry;
    carry = 0;

    if (sum > 9) {
      carry = 1;
      sum -= 10;
    }

    result[length - 1 - i] = sum;
  }

  if (result[0] === 0) {
    result.shift();
  }

  return result.join('');
};

const output1 = addStrings('11', '123');
const output2 = addStrings('456', '77');
const output3 = addStrings('0', '0');
console.log(output1); // '134'
console.log(output2); // '533'
console.log(output3); // '0'
