/*
 * @lc app=leetcode.cn id=1326 lang=javascript
 *
 * [1326] 灌溉花园的最少水龙头数目
 */

// @lc code=start
/**
 * @param {number} n
 * @param {number[]} ranges
 * @return {number}
 */
var minTaps = function (n, ranges) {
  let dp = new Array(n + 1).fill(Infinity);
  dp[0] = 0;
  for (let i = 0; i <= n; i++) {
    let left = Math.max(0, i - ranges[i]);
    let right = Math.min(n, i + ranges[i]);
    for (let j = left + 1; j <= right; j++) {
      dp[j] = Math.min(dp[j], dp[left] + 1);
    }
  }
  console.log(dp);
  return dp[n] === Infinity ? -1 : dp[n];
};
// @lc code=end
