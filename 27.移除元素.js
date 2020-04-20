/*
 * @lc app=leetcode.cn id=27 lang=javascript
 *
 * [27] 移除元素
 */
/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function(nums, val) {
  for (let i = 0; i < nums.length; ) {
    const item = nums[i];
    if (item === val) {
      nums.splice(i, 1);
    } else {
      i++;
    }
  }
  return nums.length;
};
