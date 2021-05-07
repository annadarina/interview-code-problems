/**
 * @param {string} S
 * @return {string}
 */

const removeDuplicates = function (S) {
  let arr = [];

  for (let i = 0; i < S.length; i++) {
    if (S[i] === arr[arr.length - 1]) {
      arr.pop();
    } else {
      arr.push(S[i]);
    }
  }

  return arr.join('');
};

const output1 = removeDuplicates('abbaca');
console.log(output1); // ca
