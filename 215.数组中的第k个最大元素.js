/*
 * @lc app=leetcode.cn id=215 lang=javascript
 *
 * [215] 数组中的第K个最大元素
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findKthLargest = function(nums, k) {
  for (let i = 0; i < k; i++) {
    for (let j = 0; j < nums.length; j++) {
      if (nums[j] > nums[j + 1]) {
        [nums[j], nums[j+1]] = [nums[j+1], nums[j]]
      } else if (nums[j] <= nums[j + 1]) {
        continue
      }
    }
  }
  return nums[nums.length - k]
};
console.log(findKthLargest([3,2,1,5,6,4], 2))
// @lc code=end

