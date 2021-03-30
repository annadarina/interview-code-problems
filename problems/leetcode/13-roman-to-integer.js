/**
 * @param {string} s
 * @return {number}
 */
let romanToInt = function (s) {
  const romanMap = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000
  };

  let total = 0;

  for (let i = 0; i < s.length; i++) {
    let current = s[i];
    let next = s[i + 1];

    if (next) {
      if (romanMap[current] >= romanMap[next]) {
        total += romanMap[current];
      } else {
        total += (romanMap[next] - romanMap[current]);
        i++;
      }
    } else {
      total += romanMap[current];
    }
  }

  return total;
};

const output1 = romanToInt('XX');
const output2 = romanToInt('LVIII');
const output3 = romanToInt('XXIV');
console.log(output1); // 20
console.log(output2); // 58
console.log(output3); // 24
