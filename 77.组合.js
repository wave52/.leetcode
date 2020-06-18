/*
 * @lc app=leetcode.cn id=77 lang=javascript
 *
 * [77] 组合
 */

// @lc code=start
/**
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 */
var combine = function(n, k) {
  var result = []
  var trackList = []

  function backtrack(start, level, track) {
    if(level === 0 ) {
      result.push([...track])
    }

    for(let i = start; i <= n; i++) {
      // 做选择
      track.push(i)
      // 下一层决策树
      backtrack(i + 1, level - 1, track)
      // 撤销选择
      track.pop()
    }
  }

  backtrack(1, k, trackList)

  return result
};

console.log(combine(4, 2))

// @lc code=end

