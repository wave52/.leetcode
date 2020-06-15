/*
 * @lc app=leetcode.cn id=518 lang=javascript
 *
 * [518] 零钱兑换 II
 */

// @lc code=start
/**
 * @param {number} amount
 * @param {number[]} coins
 * @return {number}
 */
var change = function(amount, coins) {
  const n = coins.length

  if(amount === 0) return 1

  // dp table
  let dp = Array.from({ length: n + 1 }, () => new Array(amount + 1).fill(0))

  // base case
  for(let i = 1; i <= n; i++) {
    dp[i][0] = 1;
  }
  console.log(dp)

  for(let i = 1; i <=n; i++) {
    for(let j = 1; j <= amount; j++) {
      if(j-coins[i-1] < 0) {
        // 不放
        dp[i][j] = dp[i-1][j]
      } else {
        // 放
        dp[i][j] = dp[i-1][j] + dp[i][j-coins[i-1]]
      }
    }
  }
  console.log(dp)
  return dp[n][amount]
};

console.log(change(5, [1,2,5]))
// @lc code=end

