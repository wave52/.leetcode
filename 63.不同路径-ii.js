/*
 * @lc app=leetcode.cn id=63 lang=javascript
 *
 * [63] 不同路径 II
 */

// @lc code=start
/**
 * @param {number[][]} obstacleGrid
 * @return {number}
 */
var uniquePathsWithObstacles = function(obstacleGrid) {
  const n = obstacleGrid.length;
  const m = obstacleGrid[0].length;
  // dp table
  const dp = Array.from({ length: n }, () => new Array(m).fill(0))
  // base case
  for(let i = 0; i < n; i++) {
    if(obstacleGrid[i][0] === 0) {
      dp[i][0] = 1;
    } else {
      break;
    }
  }
  for(let j = 0; j < m; j++) {
    if(obstacleGrid[0][j] === 0) {
      dp[0][j] = 1;
    } else {
      break
    }
  }

  for (let i = 1; i < n; i++) {
    for (let j = 1; j < m; j++) {
      // 状态转移方程
      if(obstacleGrid[i][j] === 0) {
        dp[i][j] = dp[i-1][j] + dp[i][j-1]
      }
    }
  }
  console.log(dp)

  return dp[n-1][m-1]
};
console.log(uniquePathsWithObstacles([[0,0,0],[0,1,0],[0,0,0]]))
console.log(uniquePathsWithObstacles([ [ 0, 1 ] ]))

// @lc code=end

