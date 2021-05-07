/**
 * @param {string[]} tokens
 * @return {number}
 */

const evalRPN = function (tokens) {
  const stack = [];
  const operators = ['+', '-', '/', '*'];

  for (const token of tokens) {
    if (operators.includes(token)) {
      const y = stack.pop();
      const x = stack.pop();

      switch (token) {
        case '+':
          stack.push(x + y);
          break;
        case '-':
          stack.push(x - y);
          break;
        case '/':
          stack.push(Math.trunc(x / y));
          break;
        case '*':
          stack.push(x * y);
          break;
      }
    } else {
      stack.push(+token);
    }
  }

  return stack.pop();
};

const output1 = evalRPN(['2', '1', '+', '3', '*']);
const output2 = evalRPN(['4', '13', '5', '/', '+']);
const output3 = evalRPN(['10', '6', '9', '3', '+', '-11', '*', '/', '*', '17', '+', '5', '+']);
console.log(output1); // 9
console.log(output2); // 6
console.log(output3); // 22
