/*
 * @lc app=leetcode.cn id=887 lang=javascript
 *
 * [887] 鸡蛋掉落
 */

// @lc code=start
/**
 * @param {number} K
 * @param {number} N
 * @return {number}
 */
var superEggDrop = function(K, N) {
  // dp table i K+1,鸡蛋
  let dp = Array.from({ length: K+1 }, () => new Array(N+1).fill(0))

  // base case
  for(let j=1; j<=N; j++) dp[1][j] = j
  for(let i=1; i<=K; i++) dp[i][0] = 0

  console.log(dp)

  for(let i = 1; i <= K; i++) {
    for(let j = 1; j <= N; j++) {
      // 状态转移
      dp[i][j] = Math.min(dp[i][j], Math.max(dp[i-1][j-1], dp[i][j-1])+1)
    }
  }

  console.log(dp)

  return dp[K][N]
};

// console.log(superEggDrop(1, 2))
console.log(superEggDrop(2, 6))

// @lc code=end

