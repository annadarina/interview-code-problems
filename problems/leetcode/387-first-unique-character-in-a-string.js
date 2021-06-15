/**
 * @param {string} s
 * @return {number}
 */
const firstUniqChar = function (s) {
  const map = {};

  for (let i = 0; i < s.length; i++) {
    if (!map[s[i]]) {
      map[s[i]] = 1;
    } else {
      map[s[i]] += 1;
    }
  }

  for (let i in map) {
    if (map[i] === 1) {
      return s.indexOf(i);
    }
  }

  return -1;
};

const output1 = firstUniqChar('leetcode');
const output2 = firstUniqChar('loveleetcode');
const output3 = firstUniqChar('aabb');
console.log(output1); // 0
console.log(output2); // 2
console.log(output3); // -1
