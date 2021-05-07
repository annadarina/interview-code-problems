/**
 * @param {string} s
 * @return {boolean}
 */

const isValid = function (s) {
  let brackets = '()[]{}';
  let stack = [];

  for (let bracket of s) {
    const bracketIndex = brackets.indexOf(bracket);
    if (bracketIndex % 2 === 0) {
      stack.push(bracketIndex + 1);
    } else {
      if (stack.pop() !== bracketIndex) {
        return false;
      }
    }
  }

  return stack.length === 0;
};

const output1 = isValid('()');
const output2 = isValid('()[]{}');
const output3 = isValid('(]');
const output4 = isValid('([)]');
const output5 = isValid('{[]}');
console.log(output1); // true
console.log(output2); // true
console.log(output3); // false
console.log(output4); // false
console.log(output5); // true
