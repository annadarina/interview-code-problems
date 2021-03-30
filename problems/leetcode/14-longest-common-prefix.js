/**
 * @param {string[]} strs
 * @return {string}
 */
let longestCommonPrefix = function (strs) {
  let prefix = '';

  if (strs === null || strs.length === 0) {
    return prefix;
  }

  let comparisonWord = strs[0];
  let comparisonIndex = 0;

  for (let comparisonLetter of comparisonWord) {
    for (let i = 1; i < strs.length; i++) {
      let currentWord = strs[i];
      let currentLetter = currentWord.charAt(comparisonIndex);

      if (comparisonLetter !== currentLetter || comparisonIndex > currentWord.length) {
        return prefix;
      }
    }

    comparisonIndex++;
    prefix += comparisonLetter;
  }

  return prefix;
};

const output1 = longestCommonPrefix(["bark", "bar"]);
const output2 = longestCommonPrefix(["flower", "flow", "flight"]);
const output3 = longestCommonPrefix(["dog", "racecar", "car"]);
console.log(output1); // bar
console.log(output2); // fl
console.log(output3); // ''
