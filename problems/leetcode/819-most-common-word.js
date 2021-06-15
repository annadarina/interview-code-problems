/**
 * @param {string} paragraph
 * @param {string[]} banned
 * @return {string}
 */
const mostCommonWord = function (paragraph, banned) {
  paragraph = paragraph.toLowerCase().replace(/\W/g, " ");
  let paragraphArray = paragraph.trim().split(/\s+/);

  paragraphArray = paragraphArray.filter((word) => !banned.includes(word));

  const map = {};

  for (let i = 0; i < paragraphArray.length; i++) {
    const current = paragraphArray[i];

    if (!map[current]) {
      map[current] = 1;
    } else {
      map[current] += 1;
    }
  }

  let words = Object.keys(map);

  return words.sort((a, b) => map[b] - map[a])[0];
};


const output1 = mostCommonWord('Bob hit a ball, the hit BALL flew far after it was hit.', ["hit"]);
const output2 = mostCommonWord('a.', []);
const output3 = mostCommonWord('Bob!', ['hit']);
const output4 = mostCommonWord("Bob. hIt, baLl", ["bob", "hit"]);
console.log(output1); // 'ball'
console.log(output2); // 'a'
console.log(output3); // 'bob'
console.log(output4); // 'ball'

