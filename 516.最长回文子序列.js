/*
 * @lc app=leetcode.cn id=516 lang=javascript
 *
 * [516] 最长回文子序列
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var longestPalindromeSubseq = function(s) {
  const n = s.length;

  // dp
  let dp = Array.from({length: n},()=> new Array(n).fill(0));

  // base case
  for(let i=0;i<n;i++) {
    dp[i][i] = 1
  }

  for(let i=n-1; i>=0; i--) {
    for(let j=i+1; j<n; j++) {
      // 状态转移
      if(s[i] === s[j]) {
        dp[i][j] = dp[i+1][j-1] + 2
      } else {
        dp[i][j] = Math.max(dp[i+1][j], dp[i][j-1])
      }
    }
  } 

  return dp[0][n-1]
  
}; 
// @lc code=end
