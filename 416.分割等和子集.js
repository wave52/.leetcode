/*
 * @lc app=leetcode.cn id=416 lang=javascript
 *
 * [416] 分割等和子集
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canPartition = function(nums) {
  const n = nums.length;
  let sum = 0;
  for(let i=0;i<nums.length;i++) sum += nums[i]
  if(nums.length <=1 || sum % 2 !== 0) return false;
  const w = sum / 2;

  // dp table, dp[i][j] 总和为 j，前 i 个数
  let dp = Array.from({ length: n + 1 }, () => new Array(w + 1).fill(false));

  // base case
  for(let i = 0; i < n; i++) dp[i][0] = true;

  for(let i = 1; i <= n; i++) {
    for(let j = 1; j <= w; j++) {
      // 状态转移
      if(j - nums[i-1] < 0) {
        // 不放
        dp[i][j] = dp[i-1][j]
      } else {
        // 放
        dp[i][j] = dp[i-1][j] || dp[i-1][j-nums[i-1]]
      }
    }
  }

  return dp[n][w]
};


// @lc code=end

