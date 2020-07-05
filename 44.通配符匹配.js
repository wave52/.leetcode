/*
 * @lc app=leetcode.cn id=44 lang=javascript
 *
 * [44] 通配符匹配
 */

// @lc code=start
/**
 * @param {string} s
 * @param {string} p
 * @return {boolean}
 */
var isMatch = function(s, p) {
  var n = s.length;
  var m = p.length;
  // dp table
  var dp = Array.from({ length: n + 1 }, () => new Array(m + 1).fill(false))

  // base case
  dp[0][0] = true
  // 第一次写漏掉的base case
  for(let j = 1; j <= m; j++) {
    if(p[j-1] === '*') {
      dp[0][j] = true
    } else {
      break;
    }
  }

  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= m; j++) {
      if(p[j-1] === '*') {
        dp[i][j] = dp[i][j-1] || dp[i-1][j]
      } else if (p[j-1] === '?' || s[i-1] === p[j-1]) {
        dp[i][j] = dp[i-1][j-1]
      }
    }
  }
  console.log(dp)
  return dp[n][m];
};


// console.log(isMatch('aaa', 'aaa'))
// console.log(isMatch('aaa', 'aa'))
// console.log(isMatch('aaa', 'a?a'))
// console.log(isMatch('aaaa', 'a*a'))
// @lc code=end

