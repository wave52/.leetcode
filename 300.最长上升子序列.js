/*
 * @lc app=leetcode.cn id=300 lang=javascript
 *
 * [300] 最长上升子序列
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var lengthOfLIS = function(nums) {
  const n = nums.length;

  if(n===0) return 0
  if(n===1) return 1

  // base case
  const dp = new Array(n).fill(1);

  for(let i=0; i<n; i++) {
    for(let j=0; j<i; j++) {
      if(nums[i] > nums[j]) {
        dp[i] = Math.max(dp[i], dp[j] + 1)
      }
    }
  }

  let res = 0;
  for (let i = 0; i < dp.length; i++) {
      res = Math.max(res, dp[i]);
  }
  return res;
}

console.log(lengthOfLIS([4,10,4,3,8,9]))

// @lc code=end

