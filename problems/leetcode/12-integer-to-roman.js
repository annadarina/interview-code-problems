/**
 * @param {number} num
 * @return {string}
 */
let intToRoman = function (num) {
  let roman = '';
  let romanNum = ['M', 'CM', 'D', 'CD', 'C', 'XC', 'L', 'XL', 'X', 'IX', 'V', 'IV', 'I'];
  let numbers = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];

  for (let i = 0; i < romanNum.length; i++) {
    while (num >= numbers[i]) {
      roman += romanNum[i];
      num -= numbers[i];
    }
  }

  return roman;
};

const output1 = intToRoman(9);
const output2 = intToRoman(3);
const output3 = intToRoman(58);
console.log(output1); // IX
console.log(output2); // III
console.log(output3); // LVIII
