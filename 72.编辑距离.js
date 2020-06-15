/*
 * @lc app=leetcode.cn id=72 lang=javascript
 *
 * [72] 编辑距离
 */

// @lc code=start
/**
 * @param {string} word1
 * @param {string} word2
 * @return {number}
 */
var minDistance = function(word1, word2) {
  var m = word1.length;
  var n = word2.length;

  // dp table
  var dp = Array.from({ length: m + 1 }, () => new Array(n + 1).fill(0))

  // base case
  for(let i=1; i<=m; i++) {
    dp[i][0] = i
  }

  for(let j=1; j<=n; j++) {
    dp[0][j] = j
  }

  console.log(dp)

  for(let i=1; i<=m; i++) {
    for(let j=1; j<=n; j++) {
      if(word1[i-1] === word2[j-1]) {
        dp[i][j] = dp[i-1][j-1];
      } else {
        dp[i][j] = Math.min(dp[i-1][j] + 1, dp[i][j-1] + 1, dp[i-1][j-1] + 1)
      }
    }
  }

  console.log(dp)

  return dp[m][n]

};

console.log(minDistance('intention', 'execution'))
// @lc code=end

