/**
 * @param {string} s
 * @return {number}
 */
const lengthOfLastWord = function (s) {
  const arr = s.split(' ');

  for (let i = arr.length - 1; i >= 0; i--) {
    if (arr[i].length === 0) {
      arr.splice(i, 1);
    }
  }

  return arr.length ? arr[arr.length - 1].length : 0;
};

const output1 = lengthOfLastWord("Hello World");
const output2 = lengthOfLastWord(' ');
const output3 = lengthOfLastWord('a ');
console.log(output1); // 5
console.log(output2); // 0
console.log(output3); // 1
