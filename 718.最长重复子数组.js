/*
 * @lc app=leetcode.cn id=718 lang=javascript
 *
 * [718] 最长重复子数组
 */

// @lc code=start
/**
 * @param {number[]} A
 * @param {number[]} B
 * @return {number}
 */
var findLength = function (A, B) {
  var n = A.length;
  var m = B.length;
  // dp table
  var dp = Array.from({ length: n + 1 }, () => new Array(m + 1).fill(0))
  // base case
  let res = 0;
  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= m; j++) {
      // 状态转移方程
      if (A[i - 1] == B[j - 1]) {
        dp[i][j] = 1 + dp[i-1][j-1]
      }
      res = Math.max(dp[i][j], res)
    }
  }
  console.log(dp)
  return res
};

console.log(findLength([0, 1, 1, 1, 1], [1, 0, 1, 0, 1]))
console.log(findLength([1, 2, 3, 2, 1], [3, 2, 1, 4, 7]))
// @lc code=end

