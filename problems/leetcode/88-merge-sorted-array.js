/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
const merge = function (nums1, m, nums2, n) {
  nums1.splice(m, nums1.length, ...nums2);
  nums1.sort((a, b) => a - b);
};

const output1 = merge([1, 2, 3, 0, 0, 0], 3, [2, 5, 6], 3);
const output2 = merge([1], 1, [], 0);
console.log(output1); // [1,2,2,3,5,6]
console.log(output2); // [1]

