/*
 * @lc app=leetcode.cn id=97 lang=javascript
 *
 * [97] 交错字符串
 */

// @lc code=start
/**
 * @param {string} s1
 * @param {string} s2
 * @param {string} s3
 * @return {boolean}
 */
var isInterleave = function(s1, s2, s3) {
  var n = s1.length;
  var m = s2.length;
  var l = s3.length;

  if(n + m != l) return false

  const dp = Array.from({ length: n + 1 }, () => new Array(m + 1).fill(false))

  dp[0][0] = true

  for(let i = 0; i <= n; i++) {
    for(let j = 0; j <= m; j++) {
      const p = i + j - 1;
      if (i > 0) {
        dp[i][j] = dp[i][j] || (dp[i - 1][j] && s1[i - 1] == s3[p]);
      }
      if (j > 0) {
        dp[i][j] = dp[i][j] || (dp[i][j - 1] && s2[j - 1] == s3[p]);
      }
    }
  }

  console.log(dp)

  return dp[n][m]
};
console.log(isInterleave("aabcc","dbbca","aadbbcbcac"), '->true')
console.log(isInterleave("aabcc","dbbca","aadbbbaccc"), '->false')
// @lc code=end

