/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
const findTheDifference = function (s, t) {
  let map = {};

  for (let char of s) {
    if (!map[char]) {
      map[char] = 1;
    } else {
      map[char]++;
    }
  }

  for (let char of t) {
    if (map[char] && map[char] > 0) {
      map[char]--;
    } else {
      return char;
    }
  }
};

const output1 = findTheDifference('abcd', 'abcde');
const output2 = findTheDifference('', 'y');
const output3 = findTheDifference('a', 'aa');
const output4 = findTheDifference('ae', 'aea');
console.log(output1); // e
console.log(output2); // y
console.log(output3); // a
console.log(output4); // a

