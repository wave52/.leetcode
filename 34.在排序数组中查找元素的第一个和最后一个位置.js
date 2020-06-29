/*
 * @lc app=leetcode.cn id=34 lang=javascript
 *
 * [34] 在排序数组中查找元素的第一个和最后一个位置
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function (nums, target) {
  let l = -1;
  let r = -1;

  let left = 0;
  let right = nums.length - 1;
  while (left <= right) {
    const mid = left + Math.floor((right-left) / 2)
    if (nums[mid] < target) {
      left = mid + 1
    } else if (nums[mid] > target) {
      right = mid - 1
    } else if (nums[mid] === target) {
      left = mid + 1
    }
  }
  if (right < 0 || nums[right] != target) {
    r = -1
  } else {
    r = right
  }


  let left2 = 0;
  let right2 = nums.length - 1;
  while (left2 <= right2) {
    const mid = left2 + Math.floor((right2-left2) / 2)
    if (nums[mid] < target) {
      left2 = mid + 1
    } else if (nums[mid] > target) {
      right2 = mid - 1
    } else if (nums[mid] === target) {
      right2 = mid - 1
    }
  }

  if (left2 > nums.length || nums[left2] != target) {
    l = -1
  } else {
    l = left2
  }

  return [l,r]
};
// @lc code=end

