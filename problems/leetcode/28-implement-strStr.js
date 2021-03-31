/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
const strStr = function (haystack, needle) {
  if (!needle) {
    return 0;
  }

  let i = 0;
  while (haystack.substring(i, needle.length + i) !== needle && i <= haystack.length) {
    i++;
  }

  return i > haystack.length ? -1 : i;
};

const output1 = strStr('hello', 'll');
const output2 = strStr('aaaaa', 'bb1');
const output3 = strStr('', '');
console.log(output1); // 2
console.log(output2); // -1
console.log(output3); // 0

