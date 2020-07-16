/*
 * @lc app=leetcode.cn id=309 lang=javascript
 *
 * [309] 最佳买卖股票时机含冷冻期
 */

// @lc code=start
/**
 * @param {number[]} prices
 * @return {number}
 */

var maxProfit = function(prices) {
  const n = prices.length;
  if(n === 0) return 0
  // dp table
  const dp = Array.from({ length: n }, () => new Array(3).fill(0))
  dp[0][0] = -prices[0]
  for(let i = 1; i < n; i++) {
    dp[i][0] = Math.max(dp[i - 1][0], dp[i - 1][2] - prices[i]);
    dp[i][1] = dp[i - 1][0] + prices[i];
    dp[i][2] = Math.max(dp[i - 1][1], dp[i - 1][2]);
  }
  return Math.max(dp[n - 1][1], dp[n - 1][2])
};
// @lc code=end
