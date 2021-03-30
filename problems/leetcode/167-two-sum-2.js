/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
const twoSum = function(numbers, target) {
  let p1 = 0;
  let p2 = numbers.length - 1;
  let result = [];

  while(p1<p2) {
    let left = numbers[p1];
    let right = numbers[p2];

    if (left+right === target) {
      result.push(p1+1);
      result.push(p2+1);
      break;
    } else if (left+right>target) {
      p2--;
    } else {
      p1++;
    }
  }

  return result;
};

const output = twoSum([2, 7, 8, 11, 15], 15);
console.log(output); // [2,3]
