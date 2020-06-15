/*
 * @lc app=leetcode.cn id=53 lang=javascript
 *
 * [53] 最大子序和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
  var numsLength = nums.length;
  // base case
  var dp = nums[0]
  var result = dp;
  for (let i = 1; i < numsLength; i++)
  {
    // 状态转移方程
    dp = Math.max(dp + nums[i], nums[i]);
    result = Math.max(result, dp);
  }
  return result;
}

// @lc code=end

